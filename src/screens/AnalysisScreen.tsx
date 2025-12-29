import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Transaction, SpendingTrend, TopCategory } from '../types';
import { getTransactions } from '../utils/storage';
import { formatCurrency } from '../utils/formatters';
import { getCategoryById } from '../utils/categories';

const screenWidth = Dimensions.get('window').width;

export default function AnalysisScreen() {
  const { theme } = useTheme();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [timePeriod, setTimePeriod] = useState<'week' | 'month'>('week');
  const [spendingTrend, setSpendingTrend] = useState<SpendingTrend[]>([]);
  const [topCategories, setTopCategories] = useState<TopCategory[]>([]);

  useEffect(() => {
    loadData();
  }, [timePeriod]);

  const loadData = async () => {
    const txs = await getTransactions();
    setTransactions(txs);

    // Calculate spending trend
    const now = new Date();
    const days = timePeriod === 'week' ? 7 : 30;
    const trend: SpendingTrend[] = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dayStart = new Date(date.setHours(0, 0, 0, 0));
      const dayEnd = new Date(date.setHours(23, 59, 59, 999));
      
      const dayTransactions = txs.filter(
        t => t.type === 'expense' && t.date >= dayStart && t.date <= dayEnd
      );
      
      const total = dayTransactions.reduce((sum, t) => sum + t.amount, 0);
      
      const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
      trend.push({
        day: timePeriod === 'week' ? dayNames[date.getDay()] : `${date.getDate()}/${date.getMonth() + 1}`,
        amount: total,
      });
    }
    
    setSpendingTrend(trend);

    // Calculate top categories
    const categoryMap = new Map<string, number>();
    txs
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const current = categoryMap.get(t.category) || 0;
        categoryMap.set(t.category, current + t.amount);
      });

    const top = Array.from(categoryMap.entries())
      .map(([categoryId, amount]) => {
        const category = getCategoryById(categoryId);
        return {
          name: category?.name || categoryId,
          amount,
          color: category?.color || txs.find(t => t.category === categoryId)?.color || theme.colors.primary,
        };
      })
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);

    setTopCategories(top);
  };

  const chartConfig = {
    backgroundColor: theme.colors.card,
    backgroundGradientFrom: theme.colors.card,
    backgroundGradientTo: theme.colors.card,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 107, 107, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: theme.colors.primary,
    },
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      padding: 20,
      paddingBottom: 100,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    achievementCard: {
      backgroundColor: '#FFF9C4',
      borderRadius: 16,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    achievementIcon: {
      width: 60,
      height: 60,
      borderRadius: 12,
      backgroundColor: 'rgba(255, 193, 7, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    achievementContent: {
      flex: 1,
    },
    achievementTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 6,
    },
    achievementText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 10,
    },
    progressBar: {
      height: 8,
      backgroundColor: '#E0E0E0',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 6,
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#FF9800',
      width: '60%',
    },
    progressLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressLabel: {
      fontSize: 12,
      color: theme.colors.textSecondary,
    },
    periodSelector: {
      flexDirection: 'row',
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      padding: 4,
      marginBottom: 20,
    },
    periodButton: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    periodButtonActive: {
      backgroundColor: theme.colors.primary,
    },
    periodButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.textSecondary,
    },
    periodButtonTextActive: {
      color: '#FFF',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 15,
      marginTop: 10,
    },
    chartContainer: {
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 20,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    categoriesList: {
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 20,
    },
    categoryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    categoryDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginRight: 12,
    },
    categoryName: {
      flex: 1,
      fontSize: 16,
      color: theme.colors.text,
    },
    categoryAmount: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
    },
  });

  const chartData = {
    labels: spendingTrend.map(t => t.day),
    datasets: [
      {
        data: spendingTrend.map(t => t.amount / 1000), // Convert to thousands
        color: (opacity = 1) => `rgba(255, 107, 107, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Phân Tích</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.card,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: theme.colors.text, fontSize: 12 }}>Cấp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.achievementCard}>
        <View style={styles.achievementIcon}>
          <Ionicons name="star" size={32} color="#FFC107" />
        </View>
        <View style={styles.achievementContent}>
          <Text style={styles.achievementTitle}>Người tiết kiệm thông thái</Text>
          <Text style={styles.achievementText}>
            Bạn đã tiết kiệm thêm 15% trong tháng này! Hãy tiếp tục để đạt Cấp độ 6.
          </Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressLabel}>1.200 XP</Text>
            <Text style={styles.progressLabel}>2.000 XP</Text>
          </View>
        </View>
      </View>

      <View style={styles.periodSelector}>
        <TouchableOpacity
          style={[
            styles.periodButton,
            timePeriod === 'week' && styles.periodButtonActive,
          ]}
          onPress={() => setTimePeriod('week')}
        >
          <Text
            style={[
              styles.periodButtonText,
              timePeriod === 'week' && styles.periodButtonTextActive,
            ]}
          >
            Tuần này
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.periodButton,
            timePeriod === 'month' && styles.periodButtonActive,
          ]}
          onPress={() => setTimePeriod('month')}
        >
          <Text
            style={[
              styles.periodButtonText,
              timePeriod === 'month' && styles.periodButtonTextActive,
            ]}
          >
            Tháng này
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Xu hướng chi tiêu</Text>
      <View style={styles.chartContainer}>
        <BarChart
          data={chartData}
          width={screenWidth - 72}
          height={220}
          yAxisLabel=""
          yAxisSuffix="k"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          showValuesOnTopOfBars
          fromZero
        />
      </View>

      <Text style={styles.sectionTitle}>Hạng mục chi tiêu nhiều nhất</Text>
      <View style={styles.categoriesList}>
        {topCategories.length > 0 ? (
          topCategories.map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <View
                style={[
                  styles.categoryDot,
                  { backgroundColor: category.color },
                ]}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryAmount}>
                {formatCurrency(category.amount)}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{ color: theme.colors.textSecondary, textAlign: 'center', padding: 20 }}>
            Chưa có dữ liệu chi tiêu
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

