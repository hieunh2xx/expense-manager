# Lưu Trữ Dữ Liệu - Có Bị Mất Khi Build?

## Hiện tại app đang dùng gì?

App đang sử dụng **AsyncStorage** - đây là **persistent storage** (lưu trữ vĩnh viễn), KHÔNG phải session storage.

### AsyncStorage là gì?
- ✅ Lưu trữ **vĩnh viễn** trên thiết bị
- ✅ Dữ liệu **không mất** khi đóng app
- ✅ Dữ liệu **không mất** khi restart điện thoại
- ✅ Lưu trong thư mục riêng của app trên thiết bị

## Khi nào dữ liệu BỊ MẤT?

### ❌ Bị mất khi:

1. **Gỡ app cũ và cài app mới**
   - Gỡ app → Dữ liệu bị xóa
   - Cài app mới → Dữ liệu trống

2. **Bundle ID/Package Name thay đổi**
   - Build với bundle ID khác → App được coi là app mới
   - Dữ liệu của app cũ không được truy cập

3. **Xóa dữ liệu app thủ công**
   - Settings > Apps > [App] > Clear Data
   - Dữ liệu bị xóa hoàn toàn

4. **Reset điện thoại**
   - Factory reset → Mất tất cả dữ liệu

### ✅ KHÔNG bị mất khi:

1. **Update app (giữ nguyên Bundle ID)**
   - Cài đè app mới lên app cũ
   - Dữ liệu được giữ nguyên
   - ✅ **Đây là cách an toàn nhất!**

2. **Chỉ build lại, không gỡ app**
   - Build IPA/APK mới
   - Cài đè lên app cũ
   - Dữ liệu vẫn còn

3. **Restart điện thoại**
   - Dữ liệu vẫn còn

4. **Đóng/mở app**
   - Dữ liệu vẫn còn

## So sánh các loại lưu trữ

| Loại | Dữ liệu có mất khi build? | Dữ liệu có mất khi đóng app? |
|------|---------------------------|------------------------------|
| **AsyncStorage** (hiện tại) | ⚠️ Có (nếu gỡ app) | ❌ Không |
| Session Storage | ✅ Có | ✅ Có |
| Database (SQLite) | ⚠️ Có (nếu gỡ app) | ❌ Không |
| Cloud Database | ❌ Không | ❌ Không |

## Giải pháp để KHÔNG mất dữ liệu

### Giải pháp 1: Update app thay vì cài mới (Khuyến nghị)

**Khi build app mới:**
- ✅ **KHÔNG gỡ** app cũ
- ✅ **Cài đè** app mới lên app cũ
- ✅ Dữ liệu được giữ nguyên

**Cách làm:**
```bash
# Build app mới
npm run build:ios

# Cài đè lên app cũ (không gỡ app cũ)
# Sideloadly/AltStore sẽ tự động update
```

### Giải pháp 2: Backup và Restore

Thêm tính năng backup/restore vào app:

1. **Export dữ liệu** ra file JSON
2. **Import lại** khi cần

### Giải pháp 3: Cloud Sync (Nâng cao)

Lưu dữ liệu lên cloud:
- Firebase
- AWS
- Backend riêng

## Kiểm tra Bundle ID

Để đảm bảo không mất dữ liệu, kiểm tra Bundle ID trong `app.json`:

**iOS:**
```json
"ios": {
  "bundleIdentifier": "com.expensemanager.app"
}
```

**Android:**
```json
"android": {
  "package": "com.expensemanager.app"
}
```

**QUAN TRỌNG:** 
- ✅ Giữ nguyên Bundle ID khi update → Dữ liệu không mất
- ❌ Thay đổi Bundle ID → App mới, dữ liệu mất

## Hướng dẫn Update App An Toàn

### Bước 1: Build app mới
```bash
npm run build:ios
```

### Bước 2: Cài đè lên app cũ
- **KHÔNG gỡ** app cũ
- Mở Sideloadly/AltStore
- Cài IPA mới → Sẽ tự động **update** app cũ
- Dữ liệu được giữ nguyên ✅

### Bước 3: Kiểm tra
- Mở app
- Dữ liệu cũ vẫn còn ✅

## Thêm tính năng Backup/Restore

Nếu bạn muốn thêm tính năng backup/restore để an toàn hơn, tôi có thể thêm:

1. **Export dữ liệu** ra file JSON
2. **Import dữ liệu** từ file JSON
3. **Share file** qua email/message

Bạn có muốn tôi thêm tính năng này không?

## Tóm tắt

### Dữ liệu có bị mất khi build không?

**Câu trả lời:**
- ❌ **CÓ** nếu bạn **gỡ app cũ** và cài app mới
- ✅ **KHÔNG** nếu bạn **cài đè** app mới lên app cũ (giữ nguyên Bundle ID)

### Khuyến nghị:

1. ✅ **Luôn giữ nguyên Bundle ID** khi build
2. ✅ **Cài đè app mới** thay vì gỡ và cài lại
3. ✅ **Backup dữ liệu** định kỳ (nếu quan trọng)
4. ✅ **Test trên thiết bị test** trước khi update app chính

## Câu hỏi thường gặp

### Q: Build app mới có mất dữ liệu không?
**A:** Không, nếu bạn cài đè lên app cũ (không gỡ app cũ).

### Q: Update app có mất dữ liệu không?
**A:** Không, nếu giữ nguyên Bundle ID.

### Q: Gỡ app và cài lại có mất dữ liệu không?
**A:** Có, dữ liệu sẽ bị mất.

### Q: Làm sao để không mất dữ liệu?
**A:** Luôn cài đè app mới lên app cũ, không gỡ app cũ.

### Q: Có cần database không?
**A:** Không bắt buộc. AsyncStorage đủ cho app này. Database chỉ cần nếu:
- Dữ liệu rất lớn
- Cần query phức tạp
- Cần sync nhiều thiết bị

