# Hướng dẫn Build Nhanh

## Build APK Android (Đơn giản nhất)

### Yêu cầu:
- Tài khoản Expo (miễn phí): https://expo.dev/signup
- Node.js đã cài đặt

### Các bước:

1. **Cài đặt EAS CLI:**
```bash
npm install -g eas-cli
```

2. **Đăng nhập:**
```bash
eas login
```

3. **Build APK:**
```bash
npm run build:android
```

4. **Chờ build xong** (5-15 phút), bạn sẽ nhận được link download APK

5. **Tải APK về điện thoại và cài đặt:**
   - Tải file APK về
   - Vào Settings > Security > Bật "Install unknown apps"
   - Mở file APK và cài đặt

## Build IPA iOS (Phức tạp hơn)

### Yêu cầu:
- Tài khoản Apple Developer ($99/năm) HOẶC Apple ID miễn phí
- Tài khoản Expo

### Các bước:

1. **Cài đặt và đăng nhập EAS:**
```bash
npm install -g eas-cli
eas login
```

2. **Build IPA:**
```bash
npm run build:ios
```

3. **Làm theo hướng dẫn trên màn hình** để cấu hình Apple Developer

4. **Tải IPA về và cài đặt** qua Xcode hoặc AltStore

## Lưu ý

- **Android APK**: Hoàn toàn miễn phí, có thể chia sẻ cho mọi người
- **iOS IPA**: 
  - Với Apple ID miễn phí: Chỉ dùng được 7 ngày, tối đa 3 thiết bị
  - Với Apple Developer: Không giới hạn nhưng phí $99/năm

## Xem trạng thái build

```bash
eas build:list
```

## Xem chi tiết build

```bash
eas build:view [BUILD_ID]
```

