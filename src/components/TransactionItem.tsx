import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Transaction } from '../types';
import { formatCurrency, formatDate } from '../utils/formatters';
import { getCategoryById } from '../utils/categories';

interface TransactionItemProps {
  transaction: Transaction;
  onPress?: () => void;
}

export default function TransactionItem({ transaction, onPress }: TransactionItemProps) {
  const { theme } = useTheme();
  const category = getCategoryById(transaction.category);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 12,
      backgroundColor: transaction.color || category?.color || theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 12,
      color: theme.colors.textSecondary,
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: transaction.type === 'income' ? theme.colors.income : theme.colors.text,
    },
    imagePreview: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginRight: 12,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      {transaction.imageUri ? (
        <Image source={{ uri: transaction.imageUri }} style={styles.imagePreview} />
      ) : (
        <View style={styles.iconContainer}>
          <Ionicons
            name={transaction.icon as any || category?.icon as any || 'receipt'}
            size={24}
            color="#FFF"
          />
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{transaction.description}</Text>
        <Text style={styles.subtitle}>
          {category?.name || 'Khác'} • {formatDate(transaction.date)}
        </Text>
      </View>
      <Text
        style={[
          styles.amount,
          transaction.type === 'income' && { color: theme.colors.income },
        ]}
      >
        {transaction.type === 'income' ? '+' : '-'}
        {formatCurrency(transaction.amount)}
      </Text>
    </TouchableOpacity>
  );
}


