# Download và Cài Đặt IPA - Hướng Dẫn Chi Tiết

## ✅ Build đã thành công!

Bạn có thể thấy 4 workflow runs đã thành công. Bây giờ download IPA và cài đặt vào iPhone.

## Bước 1: Download IPA về MÁY TÍNH (không phải iPhone)

⚠️ **QUAN TRỌNG:** Bạn PHẢI tải IPA về máy tính Windows/Mac, KHÔNG thể tải về iPhone và cài đặt trực tiếp.

1. **Mở máy tính Windows/Mac**
2. **Vào:** https://github.com/hieunh2xx/expense-manager/actions
3. **Click vào workflow run mới nhất** (có dấu ✅)
4. **Scroll xuống** đến phần "Artifacts" (ở cuối trang)
5. **Click "ios-build"** để download
6. File sẽ là một file ZIP → **Lưu trên máy tính** (Desktop hoặc Downloads)

## Bước 2: Giải nén IPA trên máy tính

1. **Trên máy tính**, giải nén file ZIP vừa download
2. Bên trong sẽ có file `.ipa` (ví dụ: `app.ipa`)
3. **Giữ file này trên máy tính** để cài đặt vào iPhone

## ⚠️ Tại sao không thể cài IPA trực tiếp trên iPhone?

**iPhone KHÔNG cho phép cài đặt IPA trực tiếp** vì:
- Apple chỉ cho phép cài app từ App Store
- IPA cần được ký bằng Apple ID (qua máy tính)
- Cần công cụ sideloading (Sideloadly, 3uTools, AltStore)

**Vì vậy bạn PHẢI:**
1. ✅ Tải IPA về **máy tính**
2. ✅ Dùng **máy tính** với công cụ sideloading để cài vào iPhone
3. ❌ KHÔNG thể tải về iPhone và cài trực tiếp

## Bước 3: Cài đặt vào iPhone (BẮT BUỘC dùng máy tính)

### Cách 1: Sideloadly (Dễ nhất - Khuyến nghị)

1. **Tải Sideloadly:**
   - Vào: https://sideloadly.io/
   - Tải phiên bản cho Windows
   - Cài đặt

2. **Kết nối iPhone:**
   - Dùng cáp USB kết nối iPhone với máy tính
   - Mở khóa iPhone
   - Nếu được hỏi "Trust This Computer?", chọn "Trust"

3. **Cài đặt IPA:**
   - Mở Sideloadly
   - Kéo thả file `.ipa` vào cửa sổ Sideloadly
   - Nhập Apple ID của bạn (email iCloud)
   - Nhập password Apple ID
   - Nhấn nút "Start" (màu xanh)
   - Chờ quá trình cài đặt (1-2 phút)

4. **Trust app trên iPhone:**
   - Vào: Settings > General > VPN & Device Management
   - Tìm Apple ID của bạn trong danh sách
   - Click vào và chọn "Trust [Your Apple ID]"
   - Xác nhận "Trust"

5. **Xong!** App sẽ xuất hiện trên màn hình iPhone

### Cách 2: 3uTools (Thay thế nếu Sideloadly không nhận thiết bị)

**3uTools có thể nhận diện iPhone tốt hơn Sideloadly trong một số trường hợp.**

1. **Tải 3uTools:**
   - Vào: https://www.3u.com/
   - Tải phiên bản Windows
   - Cài đặt (sẽ tự động cài driver cần thiết)

2. **Kết nối iPhone:**
   - Dùng cáp USB kết nối iPhone với máy tính
   - Mở khóa iPhone
   - Trust máy tính trên iPhone

3. **Cài đặt IPA:**
   - Mở 3uTools
   - Tab "Toolbox" (hoặc "Công cụ")
   - Chọn "Install IPA" hoặc "Cài đặt IPA"
   - Chọn file `app.ipa`
   - Đăng nhập với Apple ID
   - Chờ cài đặt

4. **Trust app trên iPhone:**
   - Vào: Settings > General > VPN & Device Management
   - Tìm Apple ID của bạn
   - Trust app

### Cách 3: iMazing (Có phí nhưng có bản dùng thử)

1. **Tải iMazing:**
   - Vào: https://imazing.com/
   - Tải phiên bản Windows
   - Cài đặt (có bản dùng thử miễn phí)

2. **Kết nối và cài đặt:**
   - Kết nối iPhone qua USB
   - Trust máy tính
   - Mở iMazing
   - Chọn iPhone → "Apps" → "Install IPA"
   - Chọn file `app.ipa`
   - Đăng nhập với Apple ID
   - Chờ cài đặt

## Bước 4: Sử dụng App

1. **Mở app** trên iPhone (icon sẽ có tên "Quản Lý Chi Tiêu")
2. **Cấp quyền** khi được hỏi:
   - Camera (để quét QR và chụp ảnh)
   - Photo Library (để chọn ảnh)
3. **Bắt đầu sử dụng!**

## Tính năng App

- ✅ Quản lý chi tiêu và thu nhập
- ✅ Theme sáng/tối tự động
- ✅ Quét mã QR
- ✅ Chụp ảnh hóa đơn (OCR tự động nhận diện)
- ✅ Phân tích chi tiêu với biểu đồ
- ✅ Lưu trữ cục bộ (không cần internet)

## Lưu ý quan trọng

### App hết hạn sau 7 ngày

Với Apple ID miễn phí, app sẽ hết hạn sau 7 ngày. Để tiếp tục sử dụng:

**Với Sideloadly:**
- Mở lại Sideloadly
- Kéo thả lại file IPA
- Nhấn "Start" (mất 1-2 phút)

**Với AltStore:**
- Mở AltStore trên iPhone
- Chọn app > "Refresh"
- Hoặc bật "Background Refresh" để tự động refresh

### Giới hạn

- ⚠️ Tối đa 3 thiết bị cùng lúc với 1 Apple ID
- ⚠️ Tối đa 3 app cùng lúc với 1 Apple ID
- ⚠️ Cần refresh lại sau 7 ngày

## Troubleshooting

### Lỗi "Untrusted Developer"
- Vào Settings > General > VPN & Device Management
- Tìm Apple ID của bạn
- Nhấn "Trust"

### App không mở được
- Kiểm tra app đã hết hạn chưa (sau 7 ngày)
- Refresh lại app

### Sideloadly không nhận iPhone (nhưng Windows đã nhận)

**Vấn đề:** iPhone hiển thị trong File Explorer nhưng Sideloadly hiện "<no devices detected>"

**Giải pháp:**

1. **Trust máy tính trên iPhone:**
   - Mở khóa iPhone
   - Khi cắm USB, iPhone sẽ hỏi "Trust This Computer?"
   - Chọn "Trust" và nhập passcode

2. **Cài đặt iTunes/Apple Mobile Device Support:**
   - Tải iTunes: https://www.apple.com/itunes/download/
   - Cài đặt iTunes (sẽ tự động cài Apple Mobile Device Support)
   - Hoặc chỉ cài "Apple Mobile Device Support" trong Custom Install

3. **Chạy Sideloadly với quyền Administrator:**
   - Đóng Sideloadly
   - Click chuột phải vào Sideloadly → "Run as administrator"
   - Mở lại Sideloadly

4. **Kiểm tra iPhone:**
   - Đảm bảo iPhone đã mở khóa
   - iPhone không ở chế độ Sleep
   - Thử rút/cắm lại cáp USB
   - Thử cổng USB khác

5. **Refresh trong Sideloadly:**
   - Click icon refresh (góc dưới bên trái)
   - Hoặc rút/cắm lại cáp USB

6. **Kiểm tra Device Manager:**
   - Nhấn Windows + X → Device Manager
   - Tìm "Apple iPhone" hoặc "Portable Devices"
   - Nếu có dấu chấm than vàng → Update driver

7. **Khởi động lại Apple Mobile Device Service:**
   - Nhấn Windows + R → gõ: services.msc
   - Tìm "Apple Mobile Device Service"
   - Click chuột phải → Restart

**Giải pháp nhanh:**
- Rút cáp USB → Mở khóa iPhone → Cắm lại → Trust máy tính → Chạy Sideloadly với quyền Admin

**Nếu vẫn không được, thử các giải pháp sau:**

8. **Cài đặt Bonjour và Apple Application Support riêng:**
   - Tải iTunes từ Apple
   - Khi cài đặt, chọn "Custom" thay vì "Install"
   - Chỉ chọn:
     - ✅ Apple Mobile Device Support
     - ✅ Apple Application Support (32-bit)
     - ✅ Apple Application Support (64-bit)
     - ✅ Bonjour
   - Bỏ chọn các phần khác
   - Cài đặt và khởi động lại máy tính

9. **Kiểm tra bằng 3uTools (công cụ kiểm tra kết nối):**
   - Tải 3uTools: https://www.3u.com/
   - Cài đặt và mở 3uTools
   - Kết nối iPhone
   - Nếu 3uTools nhận được iPhone → vấn đề là ở Sideloadly
   - Nếu 3uTools cũng không nhận → vấn đề là driver hoặc cáp USB

10. **Dùng AltStore thay vì Sideloadly (giải pháp thay thế):**
    - AltStore không cần nhận diện qua USB
    - Xem hướng dẫn ở phần "Cách 2: AltStore" bên dưới

11. **Kiểm tra Windows Defender/Firewall:**
    - Tạm thời tắt Windows Defender
    - Thử lại Sideloadly
    - Nếu được → thêm Sideloadly vào exception list

12. **Cài đặt lại driver USB:**
    - Vào Device Manager
    - Tìm "Apple iPhone" → Uninstall device
    - Rút/cắm lại cáp USB
    - Windows sẽ tự động cài lại driver

13. **Kiểm tra phiên bản iOS:**
    - Vào Settings > General > About trên iPhone
    - Ghi nhớ phiên bản iOS
    - Một số phiên bản iOS mới có thể cần iTunes mới hơn

### Không tìm thấy IPA trong Artifacts
- Đảm bảo build đã hoàn thành thành công (có dấu ✅)
- Refresh trang GitHub
- Thử download lại

## Link nhanh

- **GitHub Actions:** https://github.com/hieunh2xx/expense-manager/actions
- **Sideloadly:** https://sideloadly.io/
- **AltStore:** https://altstore.io/

## Tóm tắt

1. ✅ Download IPA từ GitHub Actions (Artifacts)
2. ✅ Giải nén file ZIP
3. ✅ Cài đặt bằng Sideloadly hoặc AltStore
4. ✅ Trust app trên iPhone
5. ✅ Sử dụng app!

**Chúc mừng! App đã sẵn sàng sử dụng!** 🎉

