import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Transaction } from '../types';
import { formatCurrency, formatDateFull } from '../utils/formatters';
import { getCategoryById } from '../utils/categories';
import { deleteTransaction } from '../utils/storage';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TransactionDetailScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { transaction } = route.params as { transaction: Transaction };
  const category = getCategoryById(transaction.category);

  const handleDelete = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa giao dịch này?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteTransaction(transaction.id);
              navigation.goBack();
            } catch (error) {
              Alert.alert('Lỗi', 'Không thể xóa giao dịch.');
            }
          },
        },
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 20,
      backgroundColor: transaction.color || category?.color || theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    headerContent: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    amount: {
      fontSize: 32,
      fontWeight: 'bold',
      color: transaction.type === 'income' ? theme.colors.income : theme.colors.text,
      marginBottom: 30,
      textAlign: 'center',
    },
    section: {
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.textSecondary,
      marginBottom: 8,
      textTransform: 'uppercase',
    },
    sectionValue: {
      fontSize: 16,
      color: theme.colors.text,
    },
    image: {
      width: '100%',
      height: 300,
      borderRadius: 12,
      marginTop: 10,
    },
    deleteButton: {
      backgroundColor: theme.colors.error,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 20,
    },
    deleteButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={transaction.icon as any || category?.icon as any || 'receipt'}
            size={40}
            color="#FFF"
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{transaction.description}</Text>
          <Text style={styles.subtitle}>{category?.name || 'Khác'}</Text>
        </View>
      </View>

      <Text style={styles.amount}>
        {transaction.type === 'income' ? '+' : '-'}
        {formatCurrency(transaction.amount)}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ngày giao dịch</Text>
        <Text style={styles.sectionValue}>{formatDateFull(transaction.date)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loại</Text>
        <Text style={styles.sectionValue}>
          {transaction.type === 'income' ? 'Thu nhập' : 'Chi tiêu'}
        </Text>
      </View>

      {transaction.imageUri && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ảnh đính kèm</Text>
          <Image source={{ uri: transaction.imageUri }} style={styles.image} />
        </View>
      )}

      {transaction.qrData && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dữ liệu QR</Text>
          <Text style={styles.sectionValue}>{transaction.qrData}</Text>
        </View>
      )}

      {transaction.recognizedText && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Văn bản nhận diện</Text>
          <Text style={styles.sectionValue}>{transaction.recognizedText}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Xóa giao dịch</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


