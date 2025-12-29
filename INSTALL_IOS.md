# Hướng Dẫn Cài Đặt iOS App Sau Khi Build Thành Công

## ✅ Build đã thành công!

Bây giờ bạn cần download IPA và cài đặt vào iPhone.

## Bước 1: Download IPA từ GitHub

1. **Vào:** https://github.com/hieunh2xx/expense-manager/actions
2. **Chọn workflow run** đã thành công (có dấu ✅)
3. **Scroll xuống** phần "Artifacts"
4. **Download** file "ios-build" (file ZIP chứa IPA)

## Bước 2: Giải nén file ZIP

1. Giải nén file ZIP vừa download
2. Bạn sẽ thấy file `.ipa` bên trong

## Bước 3: Cài đặt vào iPhone

### Phương pháp 1: Sideloadly (Dễ nhất - Khuyến nghị)

1. **Tải Sideloadly:**
   - Vào: https://sideloadly.io/
   - Tải và cài đặt Sideloadly trên máy tính

2. **Kết nối iPhone:**
   - Dùng cáp USB kết nối iPhone với máy tính
   - Mở khóa iPhone và trust máy tính

3. **Cài đặt IPA:**
   - Mở Sideloadly
   - Kéo thả file `.ipa` vào Sideloadly
   - Nhập Apple ID của bạn (tài khoản iCloud - miễn phí)
   - Nhập password Apple ID
   - Nhấn "Start"
   - Chờ cài đặt xong

4. **Trust app trên iPhone:**
   - Vào: Settings > General > VPN & Device Management
   - Tìm Apple ID của bạn
   - Nhấn "Trust"

5. **Xong!** App sẽ xuất hiện trên màn hình iPhone

### Phương pháp 2: AltStore (Tự động refresh)

1. **Cài AltStore trên iPhone:**
   - Vào: https://altstore.io/ trên iPhone
   - Tải AltStore về
   - Cài đặt qua Safari

2. **Cài AltServer trên máy tính:**
   - Tải từ: https://altstore.io/altstore/
   - Cài đặt AltServer

3. **Cài IPA:**
   - Mở AltStore trên iPhone
   - Chọn "My Apps" > "+"
   - Chọn file IPA
   - Đăng nhập với Apple ID
   - Chờ cài đặt

## Bước 4: Sử dụng App

1. **Mở app** trên iPhone
2. **Cấp quyền** camera và photo library khi được hỏi
3. **Bắt đầu sử dụng!**

## Lưu ý quan trọng

### Với Apple ID miễn phí:
- ⚠️ App sẽ **hết hạn sau 7 ngày**
- ⚠️ Cần **refresh lại** sau 7 ngày
- ✅ Hoàn toàn miễn phí

### Refresh app sau 7 ngày:

**Với Sideloadly:**
- Mở lại Sideloadly
- Kéo thả lại IPA
- Nhấn "Start" (mất 1-2 phút)

**Với AltStore:**
- Mở AltStore trên iPhone
- Chọn app > "Refresh"
- Hoặc bật "Background Refresh" để tự động

## Troubleshooting

### Lỗi "Untrusted Developer"
- Vào Settings > General > VPN & Device Management
- Tìm Apple ID của bạn
- Nhấn "Trust"

### App không mở được
- Kiểm tra app đã hết hạn chưa (sau 7 ngày)
- Refresh lại app

### Không tìm thấy IPA trong Artifacts
- Đảm bảo build đã hoàn thành thành công
- Kiểm tra lại tab Actions
- Thử download lại

## Tóm tắt

1. ✅ Download IPA từ GitHub Actions
2. ✅ Giải nén file ZIP
3. ✅ Cài đặt bằng Sideloadly hoặc AltStore
4. ✅ Trust app trên iPhone
5. ✅ Sử dụng app!

**Chúc mừng! App đã sẵn sàng sử dụng!** 🎉

