import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transaction } from '../types';

const TRANSACTIONS_KEY = '@transactions';
const BALANCE_KEY = '@balance';

export const saveTransaction = async (transaction: Transaction): Promise<void> => {
  try {
    const transactions = await getTransactions();
    transactions.push(transaction);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
    await updateBalance();
  } catch (error) {
    console.error('Error saving transaction:', error);
    throw error;
  }
};

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const data = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    if (data) {
      const transactions = JSON.parse(data);
      return transactions.map((t: any) => ({
        ...t,
        date: new Date(t.date),
      }));
    }
    return [];
  } catch (error) {
    console.error('Error getting transactions:', error);
    return [];
  }
};

export const deleteTransaction = async (id: string): Promise<void> => {
  try {
    const transactions = await getTransactions();
    const filtered = transactions.filter(t => t.id !== id);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(filtered));
    await updateBalance();
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

export const updateBalance = async (): Promise<void> => {
  try {
    const transactions = await getTransactions();
    const balance = transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') {
          acc.income += t.amount;
        } else {
          acc.expense += t.amount;
        }
        acc.total = acc.income - acc.expense;
        return acc;
      },
      { total: 0, income: 0, expense: 0 }
    );
    await AsyncStorage.setItem(BALANCE_KEY, JSON.stringify(balance));
  } catch (error) {
    console.error('Error updating balance:', error);
  }
};

export const getBalance = async () => {
  try {
    const data = await AsyncStorage.getItem(BALANCE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return { total: 0, income: 0, expense: 0 };
  } catch (error) {
    console.error('Error getting balance:', error);
    return { total: 0, income: 0, expense: 0 };
  }
};


