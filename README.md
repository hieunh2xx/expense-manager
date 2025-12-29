# Ứng dụng Quản Lý Chi Tiêu

Ứng dụng quản lý chi tiêu cá nhân được xây dựng bằng React Native và Expo, hỗ trợ iOS và Android.

## Tính năng

- 📊 **Quản lý chi tiêu và thu nhập**: Theo dõi các giao dịch hàng ngày
- 🎨 **Theme động**: Hỗ trợ chế độ sáng/tối tự động
- 📷 **Chụp ảnh hóa đơn**: Tự động nhận diện thông tin từ ảnh hóa đơn
- 📱 **Quét mã QR**: Quét mã QR để nhập nhanh giao dịch
- 📈 **Phân tích chi tiêu**: Biểu đồ và thống kê chi tiêu theo tuần/tháng
- 💾 **Lưu trữ cục bộ**: Dữ liệu được lưu trên thiết bị

## Cài đặt

### Yêu cầu

- Node.js (v16 trở lên)
- npm hoặc yarn
- Expo CLI
- Expo Go app trên điện thoại (iOS hoặc Android)

### Các bước cài đặt

1. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

2. Khởi chạy ứng dụng:
```bash
npm start
# hoặc
yarn start
```

3. Quét mã QR bằng Expo Go:
   - Mở ứng dụng Expo Go trên điện thoại
   - Quét mã QR hiển thị trong terminal hoặc trình duyệt

## Cấu trúc dự án

```
├── App.tsx                 # Entry point
├── src/
│   ├── screens/           # Các màn hình chính
│   │   ├── HomeScreen.tsx
│   │   ├── AddTransactionScreen.tsx
│   │   ├── AnalysisScreen.tsx
│   │   └── TransactionDetailScreen.tsx
│   ├── components/        # Các component tái sử dụng
│   │   ├── BalanceCard.tsx
│   │   └── TransactionItem.tsx
│   ├── contexts/          # Context providers
│   │   └── ThemeContext.tsx
│   ├── utils/             # Utilities
│   │   ├── storage.ts
│   │   ├── categories.ts
│   │   ├── formatters.ts
│   │   └── ocr.ts
│   └── types/             # TypeScript types
│       └── index.ts
```

## Tính năng OCR

Ứng dụng hiện tại sử dụng mock OCR để nhận diện thông tin từ ảnh. Để tích hợp OCR thực tế, bạn có thể:

1. **Google Cloud Vision API**: Tích hợp với Google Cloud Vision để nhận diện văn bản
2. **AWS Textract**: Sử dụng AWS Textract cho OCR
3. **Tesseract.js**: OCR client-side với Tesseract.js
4. **Firebase ML Kit**: Sử dụng Firebase ML Kit cho mobile

Xem file `src/utils/ocr.ts` để cập nhật logic OCR.

## Quyền truy cập

Ứng dụng yêu cầu các quyền sau:
- **Camera**: Để chụp ảnh hóa đơn và quét mã QR
- **Thư viện ảnh**: Để chọn ảnh từ thư viện

## Build cho Production

### iOS

```bash
expo build:ios
```

### Android

```bash
expo build:android
```

Hoặc sử dụng EAS Build:

```bash
eas build --platform ios
eas build --platform android
```

## Công nghệ sử dụng

- **React Native**: Framework mobile
- **Expo**: Development platform
- **TypeScript**: Type safety
- **React Navigation**: Navigation
- **AsyncStorage**: Local storage
- **Expo Camera**: Camera access
- **Expo Image Picker**: Image selection
- **Expo Barcode Scanner**: QR code scanning
- **React Native Chart Kit**: Charts và graphs

## Ghi chú

- Dữ liệu được lưu cục bộ trên thiết bị
- OCR hiện tại là mock - cần tích hợp API thực tế cho production
- Theme tự động theo hệ thống hoặc có thể chọn thủ công

## License

MIT


