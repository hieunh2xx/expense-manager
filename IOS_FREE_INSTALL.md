# Cài đặt iOS Miễn Phí - Giống Android APK

## So sánh Android vs iOS

| Tính năng | Android (APK) | iOS (IPA) |
|-----------|---------------|-----------|
| Cài trực tiếp | ✅ Dễ dàng | ⚠️ Phức tạp hơn |
| Miễn phí hoàn toàn | ✅ Có | ⚠️ Có nhưng giới hạn |
| Không cần đăng ký | ✅ Có | ❌ Cần Apple ID |
| Thời hạn | ✅ Vĩnh viễn | ⚠️ 7 ngày (free) |
| Số thiết bị | ✅ Không giới hạn | ⚠️ 3 thiết bị (free) |

## Các cách cài iOS miễn phí

### Cách 1: Sử dụng AltStore (Khuyến nghị - Giống Android nhất)

**Giống Android APK nhất** - Cài đặt trực tiếp trên iPhone không cần Mac!

#### Yêu cầu:
- iPhone (iOS 12.2+)
- Máy tính Windows/Mac/Linux
- Apple ID (miễn phí)

#### Các bước:

1. **Build IPA:**
```bash
npm run build:ios
```
Chọn "Use Apple ID" khi được hỏi về Apple Developer.

2. **Cài AltStore trên iPhone:**
   - Vào https://altstore.io trên iPhone
   - Tải AltStore về
   - Cài đặt qua Safari

3. **Cài AltServer trên máy tính:**
   - Tải từ: https://altstore.io/altstore/
   - Cài đặt AltServer
   - Kết nối iPhone với máy tính qua USB

4. **Cài IPA vào iPhone:**
   - Mở AltStore trên iPhone
   - Chọn "My Apps" > "+"
   - Chọn file IPA đã tải về
   - Đăng nhập với Apple ID
   - Chờ cài đặt xong

**Lưu ý:**
- App sẽ hết hạn sau 7 ngày
- Cần refresh lại qua AltStore mỗi 7 ngày (có thể tự động)
- Tối đa 3 app cùng lúc với Apple ID miễn phí

### Cách 2: Sử dụng Sideloadly (Dễ nhất - Windows)

**Rất dễ sử dụng, giống cài APK!**

#### Yêu cầu:
- Windows/Mac
- iPhone
- Apple ID

#### Các bước:

1. **Build IPA:**
```bash
npm run build:ios
```

2. **Tải Sideloadly:**
   - Vào: https://sideloadly.io/
   - Tải và cài đặt Sideloadly

3. **Cài IPA:**
   - Mở Sideloadly
   - Kết nối iPhone qua USB
   - Kéo thả file IPA vào Sideloadly
   - Đăng nhập với Apple ID
   - Nhấn "Start" để cài đặt

**Ưu điểm:**
- ✅ Rất dễ sử dụng
- ✅ Giao diện đơn giản
- ✅ Tự động refresh app

**Nhược điểm:**
- ⚠️ App hết hạn sau 7 ngày
- ⚠️ Cần refresh lại mỗi 7 ngày

### Cách 3: Sử dụng Xcode (Nếu có Mac)

**Giống nhất với Android Studio!**

#### Yêu cầu:
- Mac với Xcode
- Apple ID

#### Các bước:

1. **Build IPA hoặc mở project:**
```bash
npx expo prebuild
cd ios
pod install
open YourApp.xcworkspace
```

2. **Trong Xcode:**
   - Chọn iPhone của bạn làm device
   - Chọn "Signing & Capabilities"
   - Chọn Team (Apple ID của bạn)
   - Nhấn Run (▶️)

3. **App sẽ tự động cài trên iPhone!**

**Ưu điểm:**
- ✅ Giống Android Studio nhất
- ✅ Có thể debug trực tiếp
- ✅ Tự động refresh

**Nhược điểm:**
- ❌ Cần Mac
- ⚠️ App hết hạn sau 7 ngày

### Cách 4: Sử dụng 3uTools (Windows - Dễ nhất)

**Công cụ Windows phổ biến nhất!**

#### Các bước:

1. **Tải 3uTools:**
   - Vào: https://www.3u.com/
   - Tải và cài đặt

2. **Build IPA:**
```bash
npm run build:ios
```

3. **Cài IPA:**
   - Mở 3uTools
   - Kết nối iPhone qua USB
   - Chọn "Apps" > "Install IPA"
   - Chọn file IPA
   - Đăng nhập Apple ID
   - Chờ cài đặt

## So sánh các phương pháp

| Phương pháp | Dễ sử dụng | Cần Mac | Tự động refresh |
|-------------|------------|---------|----------------|
| AltStore | ⭐⭐⭐⭐ | ❌ | ✅ |
| Sideloadly | ⭐⭐⭐⭐⭐ | ❌ | ✅ |
| Xcode | ⭐⭐⭐ | ✅ | ✅ |
| 3uTools | ⭐⭐⭐⭐ | ❌ | ❌ |

## Lưu ý quan trọng về Apple ID miễn phí

### Giới hạn:
- ⚠️ **7 ngày**: App sẽ hết hạn sau 7 ngày
- ⚠️ **3 thiết bị**: Tối đa 3 thiết bị cùng lúc
- ⚠️ **3 app**: Tối đa 3 app cùng lúc với cùng Apple ID

### Giải pháp:
1. **Refresh tự động**: AltStore và Sideloadly có thể tự động refresh
2. **Apple Developer**: $99/năm để không giới hạn
3. **Build lại**: Build lại sau 7 ngày (mất 10-20 phút)

## Hướng dẫn chi tiết từng bước

### Bước 1: Build IPA

```bash
# Đăng nhập Expo (nếu chưa)
eas login

# Build iOS
npm run build:ios

# Khi được hỏi, chọn "Use Apple ID" (không chọn Apple Developer)
```

### Bước 2: Chọn phương pháp cài đặt

**Nếu có Windows và muốn dễ nhất:**
→ Dùng **Sideloadly**

**Nếu muốn tự động refresh:**
→ Dùng **AltStore**

**Nếu có Mac:**
→ Dùng **Xcode**

### Bước 3: Cài đặt

Làm theo hướng dẫn của từng phương pháp ở trên.

## Refresh app sau 7 ngày

### Với AltStore:
- Mở AltStore trên iPhone
- Chọn app > "Refresh"
- Hoặc bật "Background Refresh" để tự động

### Với Sideloadly:
- Mở lại Sideloadly
- Kéo thả lại file IPA
- Nhấn "Start"

## Troubleshooting

### Lỗi "Untrusted Developer"
1. Vào Settings > General > VPN & Device Management
2. Tìm Apple ID của bạn
3. Nhấn "Trust"

### App hết hạn
- Refresh lại qua AltStore/Sideloadly
- Hoặc build lại IPA mới

### Không cài được
- Kiểm tra iPhone đã trust máy tính chưa
- Kiểm tra Apple ID còn hiệu lực
- Thử phương pháp khác

## Kết luận

**Có thể cài iOS miễn phí giống Android!**

- ✅ **Sideloadly**: Dễ nhất, giống cài APK nhất
- ✅ **AltStore**: Tốt nhất, tự động refresh
- ⚠️ **Giới hạn**: 7 ngày, cần refresh lại

**Khuyến nghị:** Dùng **Sideloadly** nếu bạn dùng Windows, hoặc **AltStore** nếu muốn tự động refresh.

