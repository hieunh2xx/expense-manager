# Hướng dẫn Build iOS Ngay Bây Giờ

## Bước 1: Đăng nhập vào Expo

Mở terminal/PowerShell và chạy:

```bash
eas login
```

Bạn sẽ được yêu cầu:
- Nhập email hoặc username của tài khoản Expo
- Nếu chưa có tài khoản, tạo tại: https://expo.dev/signup (miễn phí)

Sau khi đăng nhập thành công, bạn sẽ thấy thông báo như:
```
✔ Logged in as your-email@example.com
```

## Bước 2: Build iOS

Sau khi đăng nhập, chạy lệnh build:

```bash
npm run build:ios
```

Hoặc:

```bash
eas build --platform ios --profile preview
```

## Bước 3: Làm theo hướng dẫn trên màn hình

EAS sẽ hỏi bạn về Apple Developer account:

### Tùy chọn 1: Có Apple Developer Account ($99/năm)
- Chọn "Set up Apple Developer credentials"
- Đăng nhập với Apple ID của bạn
- EAS sẽ tự động cấu hình

### Tùy chọn 2: Chưa có Apple Developer Account
- Chọn "Use Apple ID" (miễn phí)
- Đăng nhập với Apple ID thường
- **Lưu ý**: 
  - App chỉ chạy được 7 ngày
  - Tối đa 3 thiết bị
  - Cần build lại sau 7 ngày

## Bước 4: Chờ build hoàn thành

Build sẽ mất khoảng **10-20 phút**. Bạn sẽ thấy:
- Progress bar trong terminal
- Link để theo dõi build: https://expo.dev/accounts/...

## Bước 5: Download IPA

Sau khi build xong:
1. Bạn sẽ nhận được link download IPA
2. Hoặc chạy: `eas build:list` để xem danh sách builds
3. Tải file IPA về

## Bước 6: Cài đặt IPA trên iPhone

### Cách 1: Sử dụng Xcode (Cần Mac)
1. Kết nối iPhone với Mac qua USB
2. Mở Xcode > Window > Devices and Simulators
3. Chọn iPhone của bạn
4. Kéo thả file IPA vào phần "Installed Apps"

### Cách 2: Sử dụng AltStore (Không cần Mac)
1. Cài AltStore trên iPhone (từ altstore.io)
2. Tải IPA về iPhone
3. Mở bằng AltStore để cài đặt

### Cách 3: Sử dụng TestFlight (Cần Apple Developer)
1. Upload IPA lên App Store Connect
2. Thêm tester
3. Tester cài đặt qua TestFlight app

## Lưu ý quan trọng

### Với Apple ID miễn phí:
- ⚠️ App chỉ chạy được **7 ngày**
- ⚠️ Tối đa **3 thiết bị**
- ⚠️ Cần build lại sau 7 ngày
- ✅ Hoàn toàn miễn phí

### Với Apple Developer ($99/năm):
- ✅ Không giới hạn thời gian
- ✅ Không giới hạn số thiết bị
- ✅ Có thể publish lên App Store
- ✅ Ổn định hơn

## Xem trạng thái build

```bash
eas build:list
```

## Xem chi tiết build

```bash
eas build:view [BUILD_ID]
```

## Troubleshooting

### Lỗi "Not logged in"
- Chạy lại: `eas login`
- Kiểm tra: `eas whoami`

### Lỗi "Apple Developer credentials required"
- Đăng nhập với Apple ID
- Hoặc đăng ký Apple Developer account

### Build bị lỗi
- Kiểm tra log chi tiết: `eas build:view [BUILD_ID]`
- Đảm bảo đã cấu hình đúng trong `app.json`
- Kiểm tra Apple Developer account còn hiệu lực

## Lệnh nhanh

```bash
# 1. Đăng nhập
eas login

# 2. Build iOS
npm run build:ios

# 3. Xem danh sách builds
eas build:list

# 4. Xem chi tiết build mới nhất
eas build:view
```

## Chi phí

- **EAS Build**: Miễn phí với tài khoản Expo free
- **Apple ID miễn phí**: Miễn phí nhưng giới hạn 7 ngày
- **Apple Developer**: $99/năm, không giới hạn

---

**Bắt đầu ngay:** Chạy `eas login` trong terminal của bạn!

