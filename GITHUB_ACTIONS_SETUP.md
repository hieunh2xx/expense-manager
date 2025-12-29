# Hướng Dẫn Build iOS với GitHub Actions (Không Cần Mac!)

## ✅ Giải Pháp Hoàn Hảo!

GitHub Actions cung cấp **Mac runner miễn phí** để build iOS app!

## Bước 1: Tạo GitHub Repository

1. Tạo repo mới trên GitHub
2. Push code lên GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/expense-manager.git
git push -u origin main
```

## Bước 2: Setup GitHub Secrets

1. Vào GitHub repo > Settings > Secrets and variables > Actions
2. Thêm các secrets sau:

### Secret 1: APPLE_ID
- Name: `APPLE_ID`
- Value: Email Apple ID của bạn (ví dụ: `your.email@icloud.com`)

### Secret 2: APPLE_ID_PASSWORD (Tùy chọn)
- Name: `APPLE_ID_PASSWORD`
- Value: Password Apple ID (hoặc App-Specific Password)

**Lưu ý:** Nếu bạn không muốn lưu password, có thể bỏ qua và sign thủ công sau.

### Secret 3: APPLE_TEAM_ID (Tùy chọn)
- Name: `APPLE_TEAM_ID`
- Value: Team ID của bạn (có thể để trống nếu dùng Apple ID miễn phí)

## Bước 3: Chạy Build

### Cách 1: Tự động (khi push code)
- Push code lên GitHub
- GitHub Actions sẽ tự động build

### Cách 2: Thủ công
1. Vào tab "Actions" trên GitHub
2. Chọn workflow "Build iOS"
3. Nhấn "Run workflow"
4. Chọn branch và nhấn "Run workflow"

## Bước 4: Download IPA

1. Sau khi build xong, vào tab "Actions"
2. Chọn run vừa build
3. Scroll xuống phần "Artifacts"
4. Download file "ios-build"

## Lưu ý về Signing

### Với Apple ID miễn phí:

Workflow hiện tại build IPA nhưng **chưa sign**. Bạn cần:

1. **Option 1: Sign thủ công sau khi download**
   - Download IPA
   - Dùng Sideloadly/AltStore để sign và cài

2. **Option 2: Cấu hình signing trong workflow**
   - Cần App-Specific Password từ Apple ID
   - Phức tạp hơn nhưng tự động

### Với Apple Developer ($99/năm):

Workflow sẽ sign tự động nếu bạn có Apple Developer account.

## Troubleshooting

### Build failed
- Kiểm tra logs trong GitHub Actions
- Đảm bảo đã push đủ files
- Kiểm tra `app.json` có đúng không

### IPA không sign
- Đây là bình thường với Apple ID miễn phí
- Dùng Sideloadly/AltStore để sign sau

### Không thấy workflow
- Đảm bảo file `.github/workflows/build-ios.yml` đã được push
- Kiểm tra branch đúng chưa

## Tùy chỉnh Workflow

Bạn có thể chỉnh sửa file `.github/workflows/build-ios.yml` để:
- Thay đổi trigger (khi nào build)
- Thêm bước test
- Thêm bước deploy
- Thay đổi Xcode version

## So sánh với các phương pháp khác

| Phương pháp | Miễn phí? | Tự động? | Khó? |
|-------------|-----------|----------|------|
| GitHub Actions | ✅ | ✅ | ⭐⭐ |
| Codemagic | ✅ (limited) | ✅ | ⭐ |
| Bitrise | ✅ (limited) | ✅ | ⭐ |
| EAS Build | ❌ | ✅ | ⭐ |

## Khuyến nghị

✅ **GitHub Actions là cách tốt nhất** để build iOS không cần Mac!

- Hoàn toàn miễn phí
- Tự động build khi push code
- Không cần Mac
- Dễ setup

## Bước tiếp theo

1. ✅ Push code lên GitHub
2. ✅ Setup secrets
3. ✅ Chạy workflow
4. ✅ Download IPA
5. ✅ Sign và cài bằng Sideloadly/AltStore

**Bạn đã sẵn sàng chưa? Hãy push code lên GitHub và thử build!**

