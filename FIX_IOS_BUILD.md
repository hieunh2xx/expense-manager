# Sửa Lỗi Build iOS - Dùng Apple ID Miễn Phí

## Vấn đề

Bạn đã chọn nhầm **"Set up Apple Developer credentials"** (cần $99/năm) thay vì **"Use existing Apple ID"** (miễn phí).

## Giải pháp: Xóa và build lại

### Bước 1: Xóa credentials cũ

Chạy lệnh sau và làm theo hướng dẫn:

```bash
eas credentials -p ios
```

Hoặc xóa trực tiếp:

```bash
eas credentials:configure-build -p ios
```

Khi được hỏi, chọn:
- **Remove credentials** hoặc **Clear all**

### Bước 2: Build lại với Apple ID miễn phí

```bash
npm run build:ios
```

### Bước 3: Khi được hỏi, chọn ĐÚNG option

EAS sẽ hỏi:
```
? How would you like to upload your credentials?
  Set up Apple Developer credentials          ← KHÔNG CHỌN CÁI NÀY
❯ Use existing Apple ID                      ← CHỌN CÁI NÀY!
  Use existing credentials
```

**QUAN TRỌNG:** Chọn **"Use existing Apple ID"** hoặc **"Use existing Apple ID (free)"**

### Bước 4: Đăng nhập với Apple ID thường

- Nhập Apple ID của bạn (tài khoản iCloud - miễn phí)
- Nhập password
- Nhập mã 2FA nếu có
- **KHÔNG** cần đăng ký Apple Developer

## Lệnh nhanh

```bash
# 1. Xóa credentials cũ
eas credentials -p ios
# Chọn "Remove" hoặc "Clear all"

# 2. Build lại
npm run build:ios

# 3. Khi hỏi, chọn "Use existing Apple ID"
```

## Kiểm tra credentials hiện tại

```bash
eas credentials -p ios
```

Nếu thấy:
- ❌ "Apple Developer" → Xóa và build lại
- ✅ "Apple ID" → Đúng rồi!

## Lưu ý

### Với Apple ID miễn phí:
- ✅ Hoàn toàn miễn phí
- ✅ Không cần đăng ký Apple Developer
- ⚠️ App hết hạn sau 7 ngày (refresh được)
- ⚠️ Tối đa 3 thiết bị

### Với Apple Developer:
- ❌ Cần $99/năm
- ✅ Không giới hạn

## Nếu vẫn lỗi

### Cách 1: Xóa hoàn toàn và build lại

```bash
# Xóa credentials
eas credentials -p ios
# Chọn "Clear all"

# Build lại
npm run build:ios
# Chọn "Use existing Apple ID"
```

### Cách 2: Kiểm tra EAS project

```bash
eas project:info
```

Đảm bảo project ID đúng.

## Tóm tắt

1. ✅ Xóa credentials: `eas credentials -p ios` → Remove
2. ✅ Build lại: `npm run build:ios`
3. ✅ Chọn: **"Use existing Apple ID"** (KHÔNG chọn Apple Developer)
4. ✅ Đăng nhập với Apple ID thường
5. ✅ Chờ build xong

**Nhớ:** Luôn chọn **"Use existing Apple ID"** để dùng miễn phí!

