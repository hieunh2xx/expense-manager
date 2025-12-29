import { NavigatorScreenParams } from '@react-navigation/native';
import { Transaction } from './index';

export type RootStackParamList = {
  'Trang chủ': undefined;
  'Thêm mới': undefined;
  'Phân tích': undefined;
  TransactionDetail: { transaction: Transaction };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}


