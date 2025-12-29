import { format, formatDistanceToNow } from 'date-fns';
// Note: Vietnamese locale may not be available in date-fns, using enUS as fallback
// For Vietnamese support, you may need to install: npm install date-fns/locale/vi

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Hôm nay';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Hôm qua';
  } else {
    return format(date, 'dd/MM/yyyy');
  }
};

export const formatDateFull = (date: Date): string => {
  const months = [
    'tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6',
    'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatTimeAgo = (date: Date): string => {
  const result = formatDistanceToNow(date, { addSuffix: true });
  // Translate common English phrases to Vietnamese
  return result
    .replace('about ', 'khoảng ')
    .replace('less than ', 'ít hơn ')
    .replace('minute', 'phút')
    .replace('hour', 'giờ')
    .replace('day', 'ngày')
    .replace('week', 'tuần')
    .replace('month', 'tháng')
    .replace('year', 'năm')
    .replace('ago', 'trước');
};

