# Giải Pháp Cuối Cùng - Build iOS Miễn Phí

## Vấn đề

EAS Build đang yêu cầu Apple Developer account ($99/năm) thay vì cho phép dùng Apple ID miễn phí.

## Giải pháp: Build Local với Xcode (Miễn phí hoàn toàn)

**Tin tốt:** Bạn có thể build iOS miễn phí hoàn toàn bằng cách build local trên máy tính của bạn (nếu có Mac) hoặc dùng các công cụ khác.

### Phương án 1: Build Local với Xcode (Nếu có Mac)

#### Bước 1: Prebuild project

```bash
npx expo prebuild
```

Lệnh này sẽ tạo thư mục `ios/` và `android/` với native code.

#### Bước 2: Mở project trong Xcode

```bash
cd ios
pod install
open YourApp.xcworkspace
```

#### Bước 3: Cấu hình Signing trong Xcode

1. Chọn project trong Xcode
2. Chọn target "YourApp"
3. Vào tab "Signing & Capabilities"
4. Bỏ chọn "Automatically manage signing" (nếu đang bật)
5. Chọn Team: Chọn Apple ID của bạn (miễn phí)
6. Bundle Identifier: `com.expensemanager.app`

#### Bước 4: Build và cài đặt

1. Kết nối iPhone qua USB
2. Chọn iPhone làm device trong Xcode
3. Nhấn Run (▶️) hoặc Product > Run
4. App sẽ tự động cài trên iPhone!

**Lưu ý:**
- App sẽ hết hạn sau 7 ngày
- Cần build lại sau 7 ngày
- Hoàn toàn miễn phí!

### Phương án 2: Dùng Expo Development Build (Khuyến nghị)

Nếu bạn muốn tiếp tục dùng Expo workflow:

#### Bước 1: Build Development Build

```bash
eas build --profile development --platform ios
```

Khi được hỏi về credentials:
- Chọn "Use existing Apple ID"
- Đăng nhập với Apple ID miễn phí

#### Bước 2: Cài đặt Development Build

1. Tải IPA về
2. Cài vào iPhone bằng Sideloadly/AltStore
3. Chạy: `expo start --dev-client`

**Lưu ý:** Development build vẫn cần Apple ID và có thể gặp vấn đề tương tự.

### Phương án 3: Dùng React Native CLI (Nếu có Mac)

Nếu bạn có Mac và muốn build hoàn toàn local:

```bash
# Prebuild
npx expo prebuild

# Build iOS
cd ios
pod install
xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release -archivePath build/YourApp.xcarchive archive

# Export IPA
xcodebuild -exportArchive -archivePath build/YourApp.xcarchive -exportPath build -exportOptionsPlist ExportOptions.plist
```

### Phương án 4: Dùng Cloud Build Service Khác

Các dịch vụ khác có thể hỗ trợ Apple ID miễn phí tốt hơn:
- **Codemagic** (có free tier)
- **Bitrise** (có free tier)
- **GitHub Actions** (nếu có Mac runner)

## Vấn đề với EAS Build và Apple ID Miễn Phí

**Thực tế:** EAS Build có thể không hỗ trợ tốt Apple ID miễn phí cho iOS vì:
- Apple yêu cầu team ID cho một số thao tác
- EAS cần truy cập Apple Developer Portal
- Apple ID miễn phí không có team ID

## Khuyến nghị

### Nếu bạn có Mac:
✅ **Dùng Xcode để build local** - Đây là cách dễ nhất và miễn phí nhất!

### Nếu bạn không có Mac:
⚠️ **EAS Build có thể không hoạt động với Apple ID miễn phí**
- Có thể cần Apple Developer account ($99/năm)
- Hoặc dùng dịch vụ cloud build khác
- Hoặc build trên máy Mac ảo (phức tạp)

## Build Android thay vì iOS?

Nếu bạn chỉ cần app chạy trên điện thoại và không nhất thiết phải iOS:

```bash
npm run build:android
```

Android APK:
- ✅ Hoàn toàn miễn phí
- ✅ Không giới hạn
- ✅ Dễ cài đặt
- ✅ Không cần đăng ký gì

## Tóm tắt

| Phương án | Miễn phí? | Cần Mac? | Khó? |
|-----------|-----------|----------|------|
| Xcode Local | ✅ | ✅ | ⭐⭐ |
| EAS Development Build | ⚠️ | ❌ | ⭐⭐⭐ |
| Android APK | ✅ | ❌ | ⭐ |

**Khuyến nghị:** 
- Nếu có Mac → Dùng Xcode
- Nếu không có Mac → Build Android APK
- Nếu cần iOS và không có Mac → Có thể cần Apple Developer ($99/năm)

## Câu hỏi

**Q: Tại sao EAS không hỗ trợ Apple ID miễn phí?**
A: Apple yêu cầu team ID cho một số thao tác, và Apple ID miễn phí không có team ID.

**Q: Có cách nào build iOS miễn phí không cần Mac không?**
A: Rất khó. Hầu hết các dịch vụ cloud build đều yêu cầu Apple Developer account.

**Q: Android APK có tốt không?**
A: Có! APK hoàn toàn miễn phí và dễ cài đặt.

