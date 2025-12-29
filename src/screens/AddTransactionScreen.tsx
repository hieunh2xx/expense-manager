import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Transaction } from '../types';
import { saveTransaction } from '../utils/storage';
import { categories, getCategoriesByType } from '../utils/categories';
import { recognizeTextFromImage, parseQRCode } from '../utils/ocr';
import { formatCurrency } from '../utils/formatters';
import { useNavigation } from '@react-navigation/native';

export default function AddTransactionScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [amount, setAmount] = useState('0');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');
  const [description, setDescription] = useState('');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [processing, setProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanQR = async () => {
    if (hasPermission === false) {
      Alert.alert('Quyền truy cập', 'Vui lòng cấp quyền truy cập camera để quét mã QR.');
      return;
    }
    setShowQRScanner(true);
  };

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setShowQRScanner(false);
    setProcessing(true);

    try {
      const result = parseQRCode(data);
      if (result) {
        if (result.amount) {
          setAmount(result.amount.toString());
        }
        if (result.items && result.items.length > 0) {
          setDescription(result.items.join(', '));
        }
        if (result.merchant) {
          setDescription(prev => prev ? `${result.merchant} - ${prev}` : result.merchant);
        }
        Alert.alert('Thành công', 'Đã quét mã QR thành công!');
      } else {
        Alert.alert('Thông tin', 'Không thể đọc thông tin từ mã QR.');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi xử lý mã QR.');
    } finally {
      setProcessing(false);
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Quyền truy cập', 'Vui lòng cấp quyền truy cập camera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      const imageUri = result.assets[0].uri;
      setCapturedImage(imageUri);
      setProcessing(true);

      try {
        const ocrResult = await recognizeTextFromImage(imageUri);
        
        if (ocrResult.amount) {
          setAmount(ocrResult.amount.toString());
        }
        if (ocrResult.items && ocrResult.items.length > 0) {
          setDescription(ocrResult.items.join(', '));
        }
        if (ocrResult.merchant) {
          setDescription(prev => prev ? `${ocrResult.merchant} - ${prev}` : ocrResult.merchant);
        }
        
        Alert.alert('Thành công', 'Đã nhận diện thông tin từ ảnh!');
      } catch (error) {
        Alert.alert('Lỗi', 'Có lỗi xảy ra khi nhận diện ảnh.');
      } finally {
        setProcessing(false);
      }
    }
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Quyền truy cập', 'Vui lòng cấp quyền truy cập thư viện ảnh.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      const imageUri = result.assets[0].uri;
      setCapturedImage(imageUri);
      setProcessing(true);

      try {
        const ocrResult = await recognizeTextFromImage(imageUri);
        
        if (ocrResult.amount) {
          setAmount(ocrResult.amount.toString());
        }
        if (ocrResult.items && ocrResult.items.length > 0) {
          setDescription(ocrResult.items.join(', '));
        }
        if (ocrResult.merchant) {
          setDescription(prev => prev ? `${ocrResult.merchant} - ${prev}` : ocrResult.merchant);
        }
        
        Alert.alert('Thành công', 'Đã nhận diện thông tin từ ảnh!');
      } catch (error) {
        Alert.alert('Lỗi', 'Có lỗi xảy ra khi nhận diện ảnh.');
      } finally {
        setProcessing(false);
      }
    }
  };

  const handleContinue = async () => {
    const amountNum = parseFloat(amount.replace(/[^\d]/g, ''));
    if (!amountNum || amountNum <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập số tiền hợp lệ.');
      return;
    }

    if (!selectedCategory) {
      Alert.alert('Lỗi', 'Vui lòng chọn hạng mục.');
      return;
    }

    const category = categories.find(c => c.id === selectedCategory);
    if (!category) {
      Alert.alert('Lỗi', 'Hạng mục không hợp lệ.');
      return;
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      type: transactionType,
      amount: amountNum,
      category: category.id,
      description: description || category.name,
      date: new Date(),
      icon: category.icon,
      color: category.color,
      imageUri: capturedImage || undefined,
    };

    try {
      await saveTransaction(transaction);
      Alert.alert('Thành công', 'Đã thêm giao dịch thành công!', [
        {
          text: 'OK',
          onPress: () => {
            // Reset form
            setAmount('0');
            setSelectedCategory(null);
            setDescription('');
            setCapturedImage(null);
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi lưu giao dịch.');
    }
  };

  const incrementAmount = () => {
    const current = parseFloat(amount.replace(/[^\d]/g, '')) || 0;
    setAmount((current + 1000).toString());
  };

  const decrementAmount = () => {
    const current = parseFloat(amount.replace(/[^\d]/g, '')) || 0;
    if (current > 0) {
      setAmount(Math.max(0, current - 1000).toString());
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      padding: 20,
    },
    inputSection: {
      marginBottom: 30,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 10,
    },
    qrCameraSection: {
      flexDirection: 'row',
      gap: 15,
      marginBottom: 20,
    },
    qrButton: {
      flex: 1,
      height: 100,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.colors.border,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
    },
    qrButtonText: {
      marginTop: 8,
      fontSize: 14,
      color: theme.colors.text,
    },
    amountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    amountInput: {
      fontSize: 48,
      fontWeight: 'bold',
      color: theme.colors.text,
      textAlign: 'center',
      minWidth: 200,
    },
    amountControls: {
      flexDirection: 'column',
      marginLeft: 10,
    },
    controlButton: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.border,
      borderRadius: 6,
      marginVertical: 2,
    },
    categoryContainer: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 12,
      padding: 15,
      backgroundColor: theme.colors.card,
      marginBottom: 20,
    },
    categoryPicker: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    categoryText: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    typeSelector: {
      flexDirection: 'row',
      marginBottom: 20,
      borderRadius: 12,
      backgroundColor: theme.colors.card,
      padding: 4,
    },
    typeButton: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    typeButtonActive: {
      backgroundColor: theme.colors.primary,
    },
    typeButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
    },
    typeButtonTextActive: {
      color: '#FFF',
    },
    categoriesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 10,
    },
    categoryChip: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: theme.colors.border,
      marginRight: 8,
      marginBottom: 8,
    },
    categoryChipActive: {
      backgroundColor: theme.colors.primary,
    },
    categoryChipText: {
      marginLeft: 6,
      fontSize: 14,
      color: theme.colors.text,
    },
    categoryChipTextActive: {
      color: '#FFF',
    },
    continueButton: {
      backgroundColor: theme.colors.primary,
      padding: 18,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 20,
    },
    continueButtonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    scannerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    scanner: {
      width: '100%',
      height: '100%',
    },
    scannerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scannerFrame: {
      width: 250,
      height: 250,
      borderWidth: 2,
      borderColor: '#FFF',
      borderRadius: 12,
    },
    closeButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 15,
      borderRadius: 30,
    },
    imagePreview: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 10,
    },
  });

  if (showQRScanner && hasPermission) {
    return (
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
        <View style={styles.scannerOverlay}>
          <View style={styles.scannerFrame} />
          <Text style={{ color: '#FFF', marginTop: 20, fontSize: 16 }}>
            Quét mã QR vào khung này
          </Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowQRScanner(false)}
        >
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }

  const availableCategories = getCategoriesByType(transactionType);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {processing && (
        <View style={{ padding: 20, alignItems: 'center' }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={{ marginTop: 10, color: theme.colors.text }}>
            Đang xử lý...
          </Text>
        </View>
      )}

      <View style={styles.inputSection}>
        <Text style={styles.label}>Quét mã hoặc chụp ảnh</Text>
        <View style={styles.qrCameraSection}>
          <TouchableOpacity style={styles.qrButton} onPress={handleScanQR}>
            <Ionicons name="qr-code" size={32} color={theme.colors.primary} />
            <Text style={styles.qrButtonText}>Quét mã QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qrButton} onPress={handleTakePhoto}>
            <Ionicons name="camera" size={32} color={theme.colors.primary} />
            <Text style={styles.qrButtonText}>Chụp hóa đơn</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.qrButton, { width: '100%' }]}
          onPress={handlePickImage}
        >
          <Ionicons name="image" size={32} color={theme.colors.primary} />
          <Text style={styles.qrButtonText}>Chọn ảnh từ thư viện</Text>
        </TouchableOpacity>
      </View>

      {capturedImage && (
        <Image source={{ uri: capturedImage }} style={styles.imagePreview} />
      )}

      <View style={styles.inputSection}>
        <Text style={styles.label}>Số tiền (VNĐ)</Text>
        <View style={styles.amountContainer}>
          <TextInput
            style={styles.amountInput}
            value={formatCurrency(parseFloat(amount.replace(/[^\d]/g, '')) || 0)}
            onChangeText={(text) => {
              const num = text.replace(/[^\d]/g, '');
              setAmount(num || '0');
            }}
            keyboardType="numeric"
            placeholder="0"
          />
          <View style={styles.amountControls}>
            <TouchableOpacity style={styles.controlButton} onPress={incrementAmount}>
              <Ionicons name="chevron-up" size={20} color={theme.colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={decrementAmount}>
              <Ionicons name="chevron-down" size={20} color={theme.colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Loại giao dịch</Text>
        <View style={styles.typeSelector}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              transactionType === 'expense' && styles.typeButtonActive,
            ]}
            onPress={() => setTransactionType('expense')}
          >
            <Text
              style={[
                styles.typeButtonText,
                transactionType === 'expense' && styles.typeButtonTextActive,
              ]}
            >
              Chi tiêu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeButton,
              transactionType === 'income' && styles.typeButtonActive,
            ]}
            onPress={() => setTransactionType('income')}
          >
            <Text
              style={[
                styles.typeButtonText,
                transactionType === 'income' && styles.typeButtonTextActive,
              ]}
            >
              Thu nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Hạng mục</Text>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            // In a real app, you'd show a modal with category selection
          }}
        >
          <View style={styles.categoryPicker}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory && { color: theme.colors.text },
              ]}
            >
              {selectedCategory
                ? categories.find(c => c.id === selectedCategory)?.name
                : 'Chọn hạng mục'}
            </Text>
            <Ionicons name="chevron-down" size={20} color={theme.colors.textSecondary} />
          </View>
        </TouchableOpacity>
        <View style={styles.categoriesGrid}>
          {availableCategories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryChip,
                selectedCategory === category.id && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Ionicons
                name={category.icon as any}
                size={16}
                color={selectedCategory === category.id ? '#FFF' : theme.colors.text}
              />
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category.id && styles.categoryChipTextActive,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


