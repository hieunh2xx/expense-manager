# Hướng Dẫn Sửa Lỗi Sideloadly Không Nhận iPhone

## Vấn đề
Sideloadly hiển thị "<no devices detected>" mặc dù Windows đã nhận diện iPhone trong File Explorer.

## Giải pháp từng bước

### Bước 1: Cài đặt iTunes đầy đủ (QUAN TRỌNG NHẤT)

**Sideloadly CẦN iTunes để nhận diện iPhone.**

1. **Tải iTunes:**
   - Vào: https://www.apple.com/itunes/download/
   - Tải phiên bản Windows 64-bit
   - File sẽ có tên: `iTunes64Setup.exe` (khoảng 200MB)

2. **Cài đặt iTunes:**
   - Chạy file vừa tải
   - Chọn "Install" (không chọn Custom)
   - Chờ cài đặt xong (5-10 phút)
   - **QUAN TRỌNG:** Khởi động lại máy tính sau khi cài xong

3. **Kiểm tra iTunes đã cài đúng:**
   - Mở iTunes
   - Kết nối iPhone
   - Nếu iTunes nhận được iPhone → iTunes đã cài đúng
   - Nếu không → cần cài lại iTunes

### Bước 2: Chạy Sideloadly với quyền Administrator

1. **Đóng Sideloadly** (nếu đang mở)

2. **Tìm file Sideloadly:**
   - Có thể ở Desktop hoặc Start Menu
   - Hoặc tìm trong thư mục Downloads

3. **Click chuột phải** vào Sideloadly

4. **Chọn "Run as administrator"** hoặc "Chạy với tư cách quản trị viên"

5. **Nếu Windows hỏi:**
   - "Do you want to allow this app to make changes?"
   - Chọn "Yes" hoặc "Có"

6. **Mở lại Sideloadly**

### Bước 3: Trust máy tính trên iPhone

1. **Rút cáp USB** khỏi máy tính

2. **Mở khóa iPhone**

3. **Cắm lại cáp USB**

4. **Trên iPhone sẽ hiện popup:**
   - "Trust This Computer?"
   - Chọn **"Trust"**

5. **Nhập passcode iPhone** nếu được hỏi

6. **Kiểm tra đã Trust:**
   - Vào: Settings > General > VPN & Device Management
   - Nếu thấy máy tính của bạn → đã Trust thành công

### Bước 4: Kiểm tra trong Device Manager

1. **Mở Device Manager:**
   - Nhấn **Windows + X**
   - Chọn **"Device Manager"** hoặc **"Trình quản lý thiết bị"**

2. **Tìm iPhone:**
   - Tìm **"Apple iPhone"** hoặc
   - **"Portable Devices"** → **"Apple iPhone"**

3. **Nếu có dấu chấm than vàng ⚠️:**
   - Click chuột phải vào "Apple iPhone"
   - Chọn **"Update driver"** hoặc **"Cập nhật trình điều khiển"**
   - Chọn **"Search automatically for drivers"**
   - Chờ Windows cài driver

4. **Nếu không thấy "Apple iPhone":**
   - Cài đặt lại iTunes
   - Khởi động lại máy tính

### Bước 5: Khởi động lại dịch vụ Apple Mobile Device

1. **Mở Services:**
   - Nhấn **Windows + R**
   - Gõ: `services.msc`
   - Nhấn Enter

2. **Tìm "Apple Mobile Device Service":**
   - Scroll xuống tìm "Apple Mobile Device Service"
   - Hoặc tìm "Bonjour Service"

3. **Khởi động lại dịch vụ:**
   - Click chuột phải vào "Apple Mobile Device Service"
   - Chọn **"Restart"** hoặc **"Khởi động lại"**
   - Đảm bảo Status là **"Running"**

4. **Nếu không thấy dịch vụ:**
   - Cài đặt lại iTunes
   - Khởi động lại máy tính

### Bước 6: Refresh trong Sideloadly

1. **Mở Sideloadly** (đã chạy với quyền Admin)

2. **Kết nối iPhone:**
   - Đảm bảo iPhone đã mở khóa
   - Đảm bảo iPhone đã Trust máy tính

3. **Click icon Refresh:**
   - Icon refresh ở góc dưới bên trái (hình mũi tên tròn)
   - Hoặc rút/cắm lại cáp USB

4. **Đợi 5-10 giây**

5. **Kiểm tra phần "iDevice:":**
   - Nếu thấy tên iPhone (ví dụ: "iPhone của [Tên]") → **THÀNH CÔNG!**
   - Nếu vẫn "<no devices detected>" → tiếp tục bước tiếp theo

### Bước 7: Thử cáp/cổng USB khác

1. **Thử cáp USB khác** (nếu có)

2. **Thử cổng USB khác:**
   - Thử cổng USB 2.0 (thường là cổng đen)
   - Thử cổng USB 3.0 (thường là cổng xanh)
   - **Tránh dùng USB hub**, cắm trực tiếp vào máy tính

### Bước 8: Kiểm tra bằng 3uTools

**3uTools giúp kiểm tra xem vấn đề là ở Sideloadly hay ở driver.**

1. **Tải 3uTools:**
   - Vào: https://www.3u.com/
   - Tải phiên bản Windows
   - Cài đặt

2. **Mở 3uTools:**
   - Kết nối iPhone
   - Trust máy tính

3. **Kiểm tra:**
   - Nếu 3uTools nhận được iPhone → **Vấn đề là ở Sideloadly**
   - Nếu 3uTools cũng không nhận → **Vấn đề là ở driver/cáp USB**

4. **Nếu 3uTools nhận được:**
   - Có thể dùng 3uTools để cài IPA (xem hướng dẫn ở file DOWNLOAD_IPA.md)
   - Hoặc tiếp tục sửa Sideloadly

## Giải pháp thay thế nếu Sideloadly vẫn không hoạt động

### Giải pháp 1: Dùng 3uTools

3uTools có thể nhận diện iPhone tốt hơn Sideloadly.

**Xem hướng dẫn:** File `DOWNLOAD_IPA.md` - Cách 2: 3uTools

### Giải pháp 2: Dùng iMazing

iMazing là công cụ chuyên nghiệp, có bản dùng thử miễn phí.

**Xem hướng dẫn:** File `DOWNLOAD_IPA.md` - Cách 3: iMazing

## Checklist nhanh

Trước khi thử lại Sideloadly, đảm bảo:

- [ ] iTunes đã được cài đặt đầy đủ
- [ ] Đã khởi động lại máy tính sau khi cài iTunes
- [ ] Sideloadly đang chạy với quyền Administrator
- [ ] iPhone đã Trust máy tính
- [ ] iPhone đã mở khóa
- [ ] Đã thử refresh trong Sideloadly
- [ ] Đã thử cáp/cổng USB khác

## Thứ tự ưu tiên

1. **Cài iTunes đầy đủ** → Khởi động lại máy tính
2. **Chạy Sideloadly với quyền Admin**
3. **Trust máy tính trên iPhone**
4. **Refresh trong Sideloadly**
5. **Nếu vẫn không được → Dùng 3uTools**

## Lưu ý quan trọng

- **iTunes là BẮT BUỘC** để Sideloadly nhận diện iPhone
- **Luôn chạy Sideloadly với quyền Administrator**
- **iPhone phải Trust máy tính** trước khi Sideloadly có thể nhận diện
- **Khởi động lại máy tính** sau khi cài iTunes

## Liên hệ hỗ trợ

Nếu vẫn không được sau khi thử tất cả các bước trên:
- Thử dùng 3uTools hoặc iMazing (xem file DOWNLOAD_IPA.md)
- Kiểm tra phiên bản iOS của iPhone (một số phiên bản cũ có thể cần iTunes cũ hơn)
- Kiểm tra Windows version (Windows 10/11 được hỗ trợ tốt nhất)

