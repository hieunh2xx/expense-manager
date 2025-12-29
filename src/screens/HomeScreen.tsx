import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Transaction, Balance } from '../types';
import { getTransactions, getBalance } from '../utils/storage';
import { formatCurrency, formatDate } from '../utils/formatters';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({ total: 0, income: 0, expense: 0 });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [txs, bal] = await Promise.all([
      getTransactions(),
      getBalance(),
    ]);
    // Sort by date, newest first
    const sorted = txs.sort((a, b) => b.date.getTime() - a.date.getTime());
    setTransactions(sorted.slice(0, 10)); // Show last 10
    setBalance(bal);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: 20,
      paddingTop: 60,
    },
    greeting: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginBottom: 20,
    },
    headerRight: {
      position: 'absolute',
      right: 20,
      top: 60,
    },
    scrollContent: {
      paddingBottom: 100,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    seeAll: {
      fontSize: 14,
      color: theme.colors.primary,
      fontWeight: '600',
    },
    transactionsList: {
      paddingHorizontal: 20,
    },
    emptyState: {
      padding: 40,
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Chào Alex</Text>
          <Text style={styles.subtitle}>Hôm nay bạn chi tiêu thế nào?</Text>
          <TouchableOpacity style={styles.headerRight}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#D4A574',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name="person" size={24} color="#FFF" />
            </View>
          </TouchableOpacity>
        </View>

        <BalanceCard balance={balance} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hoạt động gần đây</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsList}>
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onPress={() => navigation.navigate('TransactionDetail' as never, { transaction } as never)}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="receipt-outline" size={64} color={theme.colors.textSecondary} />
              <Text style={styles.emptyText}>
                Chưa có giao dịch nào.{'\n'}Hãy thêm giao dịch đầu tiên của bạn!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}


