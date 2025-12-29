# Hướng dẫn Build App Standalone

Hướng dẫn này sẽ giúp bạn build ứng dụng thành file APK (Android) hoặc IPA (iOS) để có thể cài đặt trực tiếp trên thiết bị mà không cần publish lên App Store hay Google Play.

## Phương pháp 1: Sử dụng EAS Build (Khuyến nghị)

EAS Build là cách hiện đại và dễ dàng nhất để build app với Expo.

### Bước 1: Cài đặt EAS CLI

```bash
npm install -g eas-cli
```

### Bước 2: Đăng nhập vào Expo

```bash
eas login
```

Nếu chưa có tài khoản, tạo tại: https://expo.dev/signup

### Bước 3: Cấu hình EAS Build

File `eas.json` đã được tạo sẵn. Bạn có thể chỉnh sửa nếu cần.

### Bước 4: Build cho Android (APK)

```bash
npm run build:android
```

Hoặc:

```bash
eas build --platform android --profile preview
```

Lệnh này sẽ:
- Build file APK trên cloud
- Bạn sẽ nhận được link download APK sau khi build xong
- APK có thể cài đặt trực tiếp trên Android

### Bước 5: Build cho iOS (IPA)

```bash
npm run build:ios
```

Hoặc:

```bash
eas build --platform ios --profile preview
```

**Lưu ý cho iOS:**
- Cần có tài khoản Apple Developer (có phí $99/năm)
- Hoặc sử dụng tài khoản Apple ID miễn phí (giới hạn 7 ngày)
- IPA chỉ có thể cài trên thiết bị iOS đã đăng ký

### Bước 6: Download và cài đặt

1. Sau khi build xong, bạn sẽ nhận được link download
2. **Android**: Tải APK về và cài đặt trực tiếp (cần bật "Cài đặt từ nguồn không xác định")
3. **iOS**: 
   - Tải IPA về
   - Cài đặt qua Xcode hoặc AltStore
   - Hoặc sử dụng TestFlight (cần Apple Developer account)

## Phương pháp 2: Build Local (Không cần cloud)

### Android Local Build

1. Cài đặt Android Studio và Android SDK
2. Tạo keystore:

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

3. Tạo file `android/keystore.properties`:

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=your-store-password
MYAPP_RELEASE_KEY_PASSWORD=your-key-password
```

4. Build:

```bash
cd android
./gradlew assembleRelease
```

File APK sẽ ở: `android/app/build/outputs/apk/release/app-release.apk`

### iOS Local Build

1. Cần máy Mac với Xcode
2. Cài đặt CocoaPods:

```bash
sudo gem install cocoapods
```

3. Prebuild:

```bash
npx expo prebuild
```

4. Mở project trong Xcode:

```bash
cd ios
pod install
open YourApp.xcworkspace
```

5. Build trong Xcode: Product > Archive

## Phương pháp 3: Expo Development Build

Nếu bạn muốn app có thể chạy mọi lúc nhưng vẫn có thể cập nhật code qua OTA:

```bash
eas build --profile development --platform android
```

Sau đó cài đặt development build và chạy:

```bash
expo start --dev-client
```

## Cài đặt APK trên Android

1. Tải file APK về điện thoại
2. Vào Settings > Security > Bật "Unknown sources" hoặc "Install unknown apps"
3. Mở file APK và cài đặt

## Cài đặt IPA trên iOS

### Cách 1: Sử dụng Xcode
1. Tải IPA về máy Mac
2. Mở Xcode > Window > Devices and Simulators
3. Kéo thả IPA vào thiết bị

### Cách 2: Sử dụng AltStore (Không cần Mac)
1. Cài AltStore trên iPhone
2. Tải IPA về
3. Mở bằng AltStore để cài đặt

### Cách 3: Sử dụng TestFlight
1. Upload IPA lên App Store Connect
2. Thêm tester
3. Tester cài đặt qua TestFlight app

## Lưu ý quan trọng

### Android:
- APK có thể cài đặt trên mọi thiết bị Android
- Không cần đăng ký hay phí
- Có thể chia sẻ APK cho người khác

### iOS:
- IPA chỉ cài được trên thiết bị đã đăng ký
- Cần Apple Developer account ($99/năm) để cài trên nhiều thiết bị
- Hoặc dùng Apple ID miễn phí (giới hạn 7 ngày, chỉ 3 thiết bị)

## Troubleshooting

### Lỗi "Build failed"
- Kiểm tra lại cấu hình trong `app.json`
- Đảm bảo đã đăng nhập EAS: `eas whoami`
- Xem log chi tiết: `eas build:list`

### APK không cài được
- Kiểm tra Android version (tối thiểu Android 6.0)
- Bật "Install from unknown sources"
- Kiểm tra dung lượng còn trống

### IPA không cài được
- Đảm bảo thiết bị đã được đăng ký trong Apple Developer
- Kiểm tra certificate và provisioning profile
- Thử build lại với profile khác

## Chi phí

- **EAS Build**: Miễn phí với tài khoản Expo free (có giới hạn)
- **Android APK**: Hoàn toàn miễn phí
- **iOS IPA**: 
  - Apple ID miễn phí: Giới hạn 7 ngày, 3 thiết bị
  - Apple Developer: $99/năm, không giới hạn

## Tài liệu tham khảo

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Android Build Guide](https://docs.expo.dev/build/android/)
- [iOS Build Guide](https://docs.expo.dev/build/ios/)

