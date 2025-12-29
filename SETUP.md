# Hướng dẫn thiết lập

## Bước 1: Cài đặt dependencies

```bash
npm install
```

## Bước 2: Tạo thư mục assets (tùy chọn)

Nếu bạn muốn thêm icon và splash screen tùy chỉnh:

```bash
mkdir -p assets
```

Sau đó thêm các file sau vào thư mục `assets/`:
- `icon.png` (1024x1024px) - Icon ứng dụng
- `splash.png` (1242x2436px) - Splash screen
- `adaptive-icon.png` (1024x1024px) - Android adaptive icon
- `favicon.png` (48x48px) - Web favicon

Nếu không có, Expo sẽ sử dụng icon mặc định.

## Bước 3: Khởi chạy ứng dụng

```bash
npm start
```

Sau đó:
1. Mở ứng dụng **Expo Go** trên điện thoại iOS hoặc Android
2. Quét mã QR hiển thị trong terminal hoặc trình duyệt
3. Ứng dụng sẽ tải và chạy trên thiết bị của bạn

## Bước 4: Test các tính năng

### Quét mã QR
1. Vào màn hình "Thêm mới"
2. Nhấn "Quét mã QR"
3. Quét mã QR (có thể tạo mã QR test với nội dung JSON: `{"amount": 50000, "merchant": "Test Store"}`)

### Chụp ảnh hóa đơn
1. Vào màn hình "Thêm mới"
2. Nhấn "Chụp hóa đơn"
3. Chụp ảnh hóa đơn hoặc chọn ảnh từ thư viện
4. Ứng dụng sẽ tự động nhận diện số tiền và thông tin (mock OCR)

### Thêm giao dịch thủ công
1. Vào màn hình "Thêm mới"
2. Nhập số tiền
3. Chọn loại giao dịch (Thu nhập/Chi tiêu)
4. Chọn hạng mục
5. Nhấn "Tiếp tục"

## Lưu ý về OCR

Hiện tại ứng dụng sử dụng **mock OCR** để mô phỏng việc nhận diện văn bản. Để tích hợp OCR thực tế:

1. **Google Cloud Vision API** (Khuyến nghị):
   - Đăng ký tài khoản Google Cloud
   - Bật Vision API
   - Thêm API key vào ứng dụng
   - Cập nhật `src/utils/ocr.ts`

2. **AWS Textract**:
   - Đăng ký AWS
   - Cấu hình IAM
   - Tích hợp SDK vào ứng dụng

3. **Tesseract.js** (Client-side):
   ```bash
   npm install tesseract.js
   ```
   - Không cần API key
   - Chạy trên thiết bị
   - Độ chính xác thấp hơn

## Troubleshooting

### Lỗi "Camera permission denied"
- Kiểm tra quyền camera trong Settings của thiết bị
- Đảm bảo đã cấp quyền trong app.json

### Lỗi "Module not found"
- Chạy `npm install` lại
- Xóa `node_modules` và `package-lock.json`, sau đó cài đặt lại

### Ứng dụng không load trên Expo Go
- Kiểm tra kết nối internet
- Đảm bảo điện thoại và máy tính cùng mạng WiFi
- Thử quét lại mã QR

## Build cho Production

### Sử dụng EAS Build (Khuyến nghị)

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios
eas build --platform android
```

### Sử dụng Expo Build (Legacy)

```bash
expo build:ios
expo build:android
```


