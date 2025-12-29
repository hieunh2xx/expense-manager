# Hướng Dẫn Push Code Lên GitHub và Build iOS

## Repository của bạn

**GitHub:** https://github.com/hieunh2xx/expense-manager

## Bước 1: Khởi tạo Git (nếu chưa có)

```bash
git init
```

## Bước 2: Thêm tất cả files

```bash
git add .
```

## Bước 3: Commit code

```bash
git commit -m "Initial commit: Expense Manager App with iOS build workflow"
```

## Bước 4: Kết nối với GitHub

```bash
git remote add origin https://github.com/hieunh2xx/expense-manager.git
```

## Bước 5: Push code lên GitHub

```bash
git branch -M main
git push -u origin main
```

Nếu được hỏi đăng nhập:
- Dùng GitHub Personal Access Token
- Hoặc đăng nhập qua browser

## Bước 6: Kiểm tra GitHub Actions

1. Vào: https://github.com/hieunh2xx/expense-manager/actions
2. Bạn sẽ thấy workflow "Build iOS"
3. Nhấn "Run workflow" để build

## Bước 7: Chạy Build iOS

### Cách 1: Tự động (khi push code)
- Mỗi khi push code, workflow sẽ tự động chạy

### Cách 2: Thủ công
1. Vào tab "Actions"
2. Chọn "Build iOS"
3. Nhấn "Run workflow"
4. Chọn branch "main"
5. Nhấn "Run workflow"

## Bước 8: Download IPA

1. Chờ build xong (10-20 phút)
2. Vào tab "Actions"
3. Chọn run vừa build
4. Scroll xuống phần "Artifacts"
5. Download "ios-build"

## Bước 9: Cài đặt trên iPhone

1. Tải Sideloadly: https://sideloadly.io/
2. Kết nối iPhone qua USB
3. Kéo thả IPA vào Sideloadly
4. Đăng nhập với Apple ID
5. Nhấn "Start"

## Lưu ý

### Nếu chưa có Git credentials:

**Tạo Personal Access Token:**
1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token
3. Chọn quyền: `repo`
4. Copy token

**Push với token:**
```bash
git push -u origin main
# Username: hieunh2xx
# Password: [paste token]
```

### Nếu gặp lỗi "remote origin already exists":

```bash
git remote remove origin
git remote add origin https://github.com/hieunh2xx/expense-manager.git
```

## Files đã được tạo

✅ `.github/workflows/build-ios.yml` - Workflow build iOS
✅ `GITHUB_ACTIONS_SETUP.md` - Hướng dẫn chi tiết
✅ `BUILD_IOS_WITHOUT_MAC.md` - Giải thích các phương pháp

## Sau khi push

1. ✅ Code sẽ được push lên GitHub
2. ✅ GitHub Actions sẽ tự động build iOS
3. ✅ Bạn sẽ nhận được IPA file
4. ✅ Cài đặt trên iPhone bằng Sideloadly

## Troubleshooting

### Lỗi "Authentication failed"
- Tạo Personal Access Token
- Dùng token thay vì password

### Lỗi "Workflow not found"
- Đảm bảo đã push file `.github/workflows/build-ios.yml`
- Kiểm tra branch đúng chưa

### Build failed
- Kiểm tra logs trong GitHub Actions
- Đảm bảo `app.json` đúng cấu hình

## Tóm tắt

1. ✅ `git init`
2. ✅ `git add .`
3. ✅ `git commit -m "Initial commit"`
4. ✅ `git remote add origin https://github.com/hieunh2xx/expense-manager.git`
5. ✅ `git push -u origin main`
6. ✅ Vào Actions > Run workflow
7. ✅ Download IPA và cài đặt

**Bạn đã sẵn sàng push code chưa?**

