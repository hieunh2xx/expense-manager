# Build iOS với Apple ID Miễn Phí - Hướng Dẫn Chi Tiết

## Vấn đề bạn gặp

Bạn đã chọn nhầm "Set up Apple Developer credentials" thay vì "Use Apple ID".

## Giải pháp: Build lại với Apple ID miễn phí

### Bước 1: Xóa credentials cũ (nếu có)

```bash
eas credentials
```

Chọn:
- Platform: `ios`
- Action: `Remove credentials` hoặc `Clear all credentials`

### Bước 2: Build lại với Apple ID miễn phí

```bash
npm run build:ios
```

### Bước 3: Khi được hỏi, chọn đúng option

EAS sẽ hỏi:
```
? How would you like to upload your credentials?
  Set up Apple Developer credentials
  Use existing Apple ID
  Use existing credentials
```

**CHỌN:** `Use existing Apple ID` hoặc `Use existing Apple ID (free)`

**KHÔNG CHỌN:** `Set up Apple Developer credentials` (cái này cần $99/năm)

### Bước 4: Đăng nhập với Apple ID thường

- Nhập Apple ID của bạn (tài khoản iCloud)
- Nhập password
- Nhập mã 2FA nếu có
- **KHÔNG** cần đăng ký Apple Developer

## Cách đảm bảo chọn đúng

### Option 1: Dùng flag `--non-interactive`

Tạo file `.easrc` hoặc dùng flag:

```bash
eas build --platform ios --profile preview --non-interactive
```

Nhưng cách này phức tạp hơn.

### Option 2: Chọn thủ công (Khuyến nghị)

Khi build, EAS sẽ hỏi. Chọn đúng option:

```
? How would you like to upload your credentials?
❯ Use existing Apple ID          ← CHỌN CÁI NÀY
  Set up Apple Developer credentials
  Use existing credentials
```

## Nếu vẫn bị lỗi

### Xóa tất cả credentials và build lại:

```bash
# Xóa credentials iOS
eas credentials -p ios

# Chọn "Remove credentials" hoặc "Clear all"

# Build lại
npm run build:ios

# Khi hỏi, chọn "Use existing Apple ID"
```

## Kiểm tra credentials hiện tại

```bash
eas credentials -p ios
```

Nếu thấy "Apple Developer" → Xóa và build lại
Nếu thấy "Apple ID" → Đúng rồi!

## Lưu ý quan trọng

### Với Apple ID miễn phí:
- ✅ Hoàn toàn miễn phí
- ✅ Không cần đăng ký Apple Developer
- ⚠️ App hết hạn sau 7 ngày
- ⚠️ Tối đa 3 thiết bị

### Với Apple Developer ($99/năm):
- ❌ Có phí
- ✅ Không giới hạn thời gian
- ✅ Không giới hạn thiết bị

## Hướng dẫn từng bước

### 1. Xóa credentials cũ:

```bash
eas credentials
```

Chọn:
- `ios`
- `Remove credentials` hoặc `Clear all`

### 2. Build lại:

```bash
npm run build:ios
```

### 3. Khi hỏi về credentials:

```
? How would you like to upload your credentials?
  Set up Apple Developer credentials          ← KHÔNG CHỌN
❯ Use existing Apple ID                      ← CHỌN CÁI NÀY
  Use existing credentials
```

### 4. Đăng nhập:

- Nhập Apple ID (email iCloud)
- Nhập password
- Nhập mã 2FA (nếu có)

### 5. Chờ build:

Build sẽ mất 10-20 phút. Bạn sẽ nhận được link download IPA.

## Troubleshooting

### Lỗi "You are not registered as an Apple Developer"
**Nguyên nhân:** Đã chọn nhầm "Set up Apple Developer credentials"
**Giải pháp:** Xóa credentials và build lại, chọn "Use existing Apple ID"

### Lỗi "Invalid credentials"
**Nguyên nhân:** Credentials cũ không hợp lệ
**Giải pháp:** Xóa và tạo lại

### Không thấy option "Use existing Apple ID"
**Nguyên nhân:** Đã có credentials cũ
**Giải pháp:** Xóa credentials trước: `eas credentials -p ios`

## Tóm tắt

1. ✅ Xóa credentials cũ: `eas credentials -p ios` → Remove
2. ✅ Build lại: `npm run build:ios`
3. ✅ Chọn: "Use existing Apple ID" (KHÔNG chọn Apple Developer)
4. ✅ Đăng nhập với Apple ID thường
5. ✅ Chờ build xong

**Quan trọng:** Luôn chọn "Use existing Apple ID" để dùng miễn phí!

