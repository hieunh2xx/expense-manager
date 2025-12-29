# Hướng Dẫn Test và Debug IPA

## Cách Test IPA trên iPhone

### Bước 1: Cài đặt IPA

1. **Tải IPA từ GitHub:**
   - Vào: https://github.com/hieunh2xx/expense-manager/actions
   - Download file ZIP "ios-build"
   - Giải nén → lấy file `app.ipa`

2. **Cài đặt bằng 3uTools:**
   - Mở 3uTools
   - Vào Toolbox > "IPA Files"
   - Chọn file `app.ipa`
   - Đăng nhập Apple ID
   - Click "Sign Now" → "Install"

3. **Trust app trên iPhone:**
   - Settings > General > VPN & Device Management
   - Trust Apple ID của bạn

4. **Bật Developer Mode:**
   - Settings > Privacy & Security > Developer Mode
   - Bật Developer Mode
   - Khởi động lại iPhone 2 lần

### Bước 2: Test App

1. **Mở app trên iPhone:**
   - Tìm app "Quản Lý Chi Tiêu"
   - Click để mở

2. **Kiểm tra các chức năng:**
   - ✅ App mở được không?
   - ✅ Màn hình hiển thị đúng không?
   - ✅ Có thể thêm giao dịch không?
   - ✅ Có thể quét QR không?
   - ✅ Có thể chụp ảnh không?
   - ✅ Theme hoạt động không?

3. **Kiểm tra lỗi:**
   - App có tự đóng không?
   - Có thông báo lỗi không?
   - Có crash không?

## Cách Xem Logs/Errors Khi App Crash

### Cách 1: Xem Crash Logs trong 3uTools

1. **Mở 3uTools trên máy tính**
2. **Vào tab "Toolbox"**
3. **Tìm "Crash Analysis" hoặc "Realtime Log"**
4. **Click vào đó**
5. **Mở app trên iPhone** (app sẽ crash)
6. **Xem logs để tìm lỗi cụ thể**

### Cách 2: Xem Crash Logs trên iPhone

1. **Vào Settings > Privacy & Security > Analytics & Improvements > Analytics Data**
2. **Tìm file có tên "QunLChiTiu" hoặc "Quản Lý Chi Tiêu"**
3. **Click vào file đó**
4. **Copy nội dung và gửi cho developer**

### Cách 3: Xem Logs trong Xcode (nếu có Mac)

1. **Mở Xcode**
2. **Vào Window > Devices and Simulators**
3. **Chọn iPhone của bạn**
4. **Click "View Device Logs"**
5. **Tìm crash logs của app**

## Cách Debug và Fix Lỗi

### Nếu App Crash Ngay Khi Mở

**Nguyên nhân có thể:**
- JavaScript error khi khởi động
- Lỗi trong ThemeContext
- Lỗi trong Navigation
- Lỗi trong AsyncStorage

**Giải pháp:**
1. Xem crash log để tìm lỗi cụ thể
2. Kiểm tra code trong các file:
   - `App.tsx`
   - `src/contexts/ThemeContext.tsx`
   - `src/screens/HomeScreen.tsx`
3. Rebuild app với code đã sửa

### Nếu App Không Mở Được

**Nguyên nhân có thể:**
- App chưa được Trust
- Developer Mode chưa được bật
- App đã hết hạn (sau 7 ngày)

**Giải pháp:**
1. Trust app: Settings > General > VPN & Device Management
2. Bật Developer Mode: Settings > Privacy & Security > Developer Mode
3. Cài lại app nếu đã hết hạn

### Nếu App Mở Nhưng Tự Đóng

**Nguyên nhân có thể:**
- JavaScript error trong code
- Lỗi khi load data từ AsyncStorage
- Lỗi trong các screen components

**Giải pháp:**
1. Xem crash log để tìm lỗi cụ thể
2. Kiểm tra code trong các screen:
   - `src/screens/HomeScreen.tsx`
   - `src/screens/AnalysisScreen.tsx`
   - `src/screens/AddTransactionScreen.tsx`
3. Thêm error handling và try-catch
4. Rebuild app với code đã sửa

## Checklist Test IPA

### Trước khi Test

- [ ] Đã tải IPA mới nhất từ GitHub
- [ ] Đã cài đặt IPA vào iPhone
- [ ] Đã Trust app trên iPhone
- [ ] Đã bật Developer Mode

### Khi Test

- [ ] App mở được không?
- [ ] Màn hình hiển thị đúng không?
- [ ] Có thể thêm giao dịch không?
- [ ] Có thể quét QR không?
- [ ] Có thể chụp ảnh không?
- [ ] Theme hoạt động không?
- [ ] App có crash không?
- [ ] Có lỗi gì không?

### Nếu Có Lỗi

- [ ] Đã xem crash log chưa?
- [ ] Đã xác định được nguyên nhân chưa?
- [ ] Đã sửa code chưa?
- [ ] Đã rebuild app chưa?
- [ ] Đã test lại chưa?

## Công Cụ Debug

### 1. 3uTools (Windows)

**Chức năng:**
- Xem crash logs
- Xem realtime logs
- Phân tích crash

**Cách dùng:**
- Toolbox > "Crash Analysis"
- Toolbox > "Realtime Log"

### 2. Xcode (Mac)

**Chức năng:**
- Xem device logs
- Debug app
- Phân tích crash

**Cách dùng:**
- Window > Devices and Simulators
- View Device Logs

### 3. Console App (Mac)

**Chức năng:**
- Xem system logs
- Xem app logs

**Cách dùng:**
- Mở Console app
- Kết nối iPhone
- Tìm logs của app

## Các Lỗi Thường Gặp và Cách Fix

### Lỗi 1: App Crash Ngay Khi Mở

**Triệu chứng:**
- App mở rồi đóng ngay
- Không hiển thị gì

**Nguyên nhân:**
- JavaScript error khi khởi động
- Lỗi trong ThemeContext
- Lỗi trong Navigation

**Giải pháp:**
1. Xem crash log
2. Kiểm tra `App.tsx` và `ThemeContext.tsx`
3. Thêm ErrorBoundary
4. Rebuild app

### Lỗi 2: App Không Mở Được

**Triệu chứng:**
- Click app không có gì xảy ra
- Hoặc hiện thông báo "Untrusted Developer"

**Nguyên nhân:**
- App chưa được Trust
- Developer Mode chưa được bật

**Giải pháp:**
1. Trust app: Settings > General > VPN & Device Management
2. Bật Developer Mode: Settings > Privacy & Security > Developer Mode

### Lỗi 3: App Hết Hạn

**Triệu chứng:**
- App không mở được
- Hiện thông báo "App has expired"

**Nguyên nhân:**
- App đã hết hạn sau 7 ngày (với Apple ID miễn phí)

**Giải pháp:**
1. Cài lại app bằng 3uTools
2. Hoặc dùng AltStore để tự động refresh

### Lỗi 4: App Mở Nhưng Tự Đóng

**Triệu chứng:**
- App mở được
- Nhưng tự đóng sau vài giây

**Nguyên nhân:**
- JavaScript error trong code
- Lỗi khi load data

**Giải pháp:**
1. Xem crash log
2. Kiểm tra code trong các screen
3. Thêm error handling
4. Rebuild app

## Quy Trình Test và Fix Lỗi

### Bước 1: Test App

1. Cài đặt IPA vào iPhone
2. Trust app và bật Developer Mode
3. Mở app và test các chức năng
4. Ghi lại các lỗi gặp phải

### Bước 2: Xem Crash Logs

1. Nếu app crash, xem crash log trong 3uTools
2. Tìm lỗi cụ thể trong log
3. Xác định nguyên nhân

### Bước 3: Fix Lỗi

1. Sửa code dựa trên crash log
2. Thêm error handling nếu cần
3. Test lại trên máy tính (nếu có thể)

### Bước 4: Rebuild App

1. Commit và push code lên GitHub
2. Rebuild app trên GitHub Actions
3. Download IPA mới
4. Cài đặt lại trên iPhone
5. Test lại

### Bước 5: Lặp Lại

1. Nếu vẫn có lỗi, lặp lại từ Bước 2
2. Tiếp tục fix và test cho đến khi app hoạt động

## Link Nhanh

- **GitHub Actions:** https://github.com/hieunh2xx/expense-manager/actions
- **3uTools:** https://www.3u.com/
- **Xcode:** https://developer.apple.com/xcode/

## Tóm Tắt

1. ✅ Cài đặt IPA vào iPhone
2. ✅ Trust app và bật Developer Mode
3. ✅ Test app và ghi lại lỗi
4. ✅ Xem crash logs để tìm nguyên nhân
5. ✅ Fix lỗi và rebuild app
6. ✅ Test lại cho đến khi app hoạt động

**Chúc bạn test thành công!** 🎉

