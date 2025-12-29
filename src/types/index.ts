export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
  icon?: string;
  color?: string;
  imageUri?: string;
  qrData?: string;
  recognizedText?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: 'income' | 'expense';
}

export interface Balance {
  total: number;
  income: number;
  expense: number;
}

export interface SpendingTrend {
  day: string;
  amount: number;
}

export interface TopCategory {
  name: string;
  amount: number;
  color: string;
}


