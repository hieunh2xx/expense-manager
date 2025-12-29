import { Category } from '../types';

export const categories: Category[] = [
  // Expenses
  { id: 'food', name: 'Ăn uống', icon: 'restaurant', color: '#FF6B6B', type: 'expense' },
  { id: 'shopping', name: 'Mua sắm', icon: 'cart', color: '#9B59B6', type: 'expense' },
  { id: 'transport', name: 'Di chuyển', icon: 'car', color: '#3498DB', type: 'expense' },
  { id: 'bills', name: 'Hóa đơn', icon: 'receipt', color: '#E67E22', type: 'expense' },
  { id: 'entertainment', name: 'Giải trí', icon: 'film', color: '#E74C3C', type: 'expense' },
  { id: 'health', name: 'Sức khỏe', icon: 'medical', color: '#1ABC9C', type: 'expense' },
  { id: 'education', name: 'Giáo dục', icon: 'school', color: '#3498DB', type: 'expense' },
  { id: 'other', name: 'Khác', icon: 'ellipsis-horizontal', color: '#95A5A6', type: 'expense' },
  // Income
  { id: 'salary', name: 'Lương', icon: 'wallet', color: '#28A745', type: 'income' },
  { id: 'freelance', name: 'Freelance', icon: 'briefcase', color: '#28A745', type: 'income' },
  { id: 'investment', name: 'Đầu tư', icon: 'trending-up', color: '#28A745', type: 'income' },
  { id: 'gift', name: 'Quà tặng', icon: 'gift', color: '#28A745', type: 'income' },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getCategoriesByType = (type: 'income' | 'expense'): Category[] => {
  return categories.filter(cat => cat.type === type);
};


