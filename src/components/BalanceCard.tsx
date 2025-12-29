import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Balance } from '../types';
import { formatCurrency } from '../utils/formatters';

interface BalanceCardProps {
  balance: Balance;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginTop: 10,
      borderRadius: 20,
      overflow: 'hidden',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    gradient: {
      padding: 24,
    },
    label: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: 8,
    },
    amount: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: 24,
    },
    buttonsRow: {
      flexDirection: 'row',
      gap: 12,
    },
    button: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContent: {
      alignItems: 'center',
    },
    buttonIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 6,
    },
    buttonLabel: {
      fontSize: 12,
      color: '#FFF',
      marginBottom: 4,
    },
    buttonAmount: {
      fontSize: 14,
      fontWeight: '600',
      color: '#FFF',
    },
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#9B59B6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.label}>Tổng số dư</Text>
        <Text style={styles.amount}>{formatCurrency(balance.total)}</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <View style={styles.buttonIcon}>
                <Ionicons name="arrow-down" size={18} color="#FFF" />
              </View>
              <Text style={styles.buttonLabel}>Thu nhập</Text>
              <Text style={styles.buttonAmount}>{formatCurrency(balance.income)}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <View style={styles.buttonIcon}>
                <Ionicons name="arrow-up" size={18} color="#FFF" />
              </View>
              <Text style={styles.buttonLabel}>Chi tiêu</Text>
              <Text style={styles.buttonAmount}>{formatCurrency(balance.expense)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}


