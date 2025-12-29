# Build iOS Không Cần Mac - Hướng Dẫn Đầy Đủ

## Thực tế

**Tin xấu:** Để build iOS, bạn **CẦN** macOS và Xcode (theo yêu cầu của Apple).

**Tin tốt:** Có nhiều cách để build iOS **KHÔNG CẦN MAC THẬT**!

## Giải pháp 1: Dùng Cloud Build Services (Khuyến nghị)

### Option A: GitHub Actions với Mac Runner (Miễn phí!)

GitHub cung cấp Mac runner miễn phí cho GitHub Actions.

#### Bước 1: Tạo file workflow

Tạo file `.github/workflows/build-ios.yml`:

```yaml
name: Build iOS

on:
  workflow_dispatch:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: macos-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Setup Expo
      uses: expo/expo-github-action@v8
      with:
        expo-version: latest
        token: ${{ secrets.EXPO_TOKEN }}
    
    - name: Install dependencies
      run: npm install
    
    - name: Prebuild
      run: npx expo prebuild --platform ios
    
    - name: Install CocoaPods
      run: |
        cd ios
        pod install
    
    - name: Build IPA
      run: |
        cd ios
        xcodebuild -workspace YourApp.xcworkspace \
          -scheme YourApp \
          -configuration Release \
          -archivePath build/YourApp.xcarchive \
          archive
    
    - name: Export IPA
      run: |
        cd ios
        xcodebuild -exportArchive \
          -archivePath build/YourApp.xcarchive \
          -exportPath build \
          -exportOptionsPlist ExportOptions.plist
    
    - name: Upload IPA
      uses: actions/upload-artifact@v3
      with:
        name: ios-build
        path: ios/build/*.ipa
```

#### Bước 2: Setup

1. Push code lên GitHub
2. Tạo Expo token: `eas token:create`
3. Thêm vào GitHub Secrets: Settings > Secrets > New secret
   - Name: `EXPO_TOKEN`
   - Value: token bạn vừa tạo

#### Bước 3: Chạy build

- Vào GitHub Actions tab
- Chọn workflow "Build iOS"
- Nhấn "Run workflow"

**Ưu điểm:**
- ✅ Hoàn toàn miễn phí
- ✅ Không cần Mac
- ✅ Tự động build khi push code

**Nhược điểm:**
- ⚠️ Cần Apple ID để sign (vẫn miễn phí)
- ⚠️ Cần setup GitHub Actions

### Option B: Codemagic (Có Free Tier)

1. Đăng ký tại: https://codemagic.io/
2. Kết nối GitHub repo
3. Chọn iOS build
4. Cấu hình signing với Apple ID
5. Build!

**Free tier:** 500 phút build/tháng

### Option C: Bitrise (Có Free Tier)

1. Đăng ký tại: https://www.bitrise.io/
2. Kết nối GitHub repo
3. Chọn iOS workflow
4. Build!

**Free tier:** 200 phút build/tháng

## Giải pháp 2: Dùng Mac Ảo (Phức tạp)

### Option A: Hackintosh (Không khuyến nghị)

- Cài macOS trên PC
- Vi phạm ToS của Apple
- Phức tạp và không ổn định

### Option B: Cloud Mac Services

- MacStadium
- MacinCloud
- AWS EC2 Mac instances

**Chi phí:** ~$20-50/tháng

## Giải pháp 3: EAS Build với Apple Developer (Không miễn phí)

Nếu bạn có Apple Developer account ($99/năm):

```bash
eas build --platform ios --profile preview
```

Sẽ hoạt động tốt, nhưng cần trả phí.

## Giải pháp 4: Build Android Thay Vì iOS (Miễn phí hoàn toàn)

Nếu bạn không nhất thiết cần iOS:

```bash
npm run build:android
```

Android APK:
- ✅ Hoàn toàn miễn phí
- ✅ Không cần Mac
- ✅ Không giới hạn
- ✅ Dễ cài đặt

## So sánh các phương pháp

| Phương pháp | Miễn phí? | Cần Mac? | Khó? | Tốt? |
|-------------|-----------|----------|------|------|
| GitHub Actions | ✅ | ❌ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Codemagic | ✅ (limited) | ❌ | ⭐⭐ | ⭐⭐⭐⭐ |
| Bitrise | ✅ (limited) | ❌ | ⭐⭐ | ⭐⭐⭐⭐ |
| Mac ảo | ⚠️ | ❌ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| EAS + Dev Account | ❌ | ❌ | ⭐ | ⭐⭐⭐⭐⭐ |
| Android APK | ✅ | ❌ | ⭐ | ⭐⭐⭐⭐ |

## Khuyến nghị

### Nếu bạn muốn iOS miễn phí:
1. ✅ **GitHub Actions** - Tốt nhất, hoàn toàn miễn phí
2. ✅ **Codemagic/Bitrise** - Dễ setup, có free tier

### Nếu bạn không cần iOS ngay:
1. ✅ **Build Android APK** - Dễ nhất, miễn phí
2. ⏳ Đợi có Mac hoặc Apple Developer account

## Hướng dẫn chi tiết GitHub Actions

Tôi có thể tạo file workflow cho bạn ngay bây giờ. Bạn có muốn không?

## Tóm tắt

**Câu trả lời:** CÓ THỂ build iOS không cần Mac thật!

**Cách tốt nhất:**
1. GitHub Actions (miễn phí)
2. Codemagic/Bitrise (free tier)
3. Android APK (nếu không cần iOS)

**Bạn muốn tôi setup GitHub Actions workflow cho bạn không?**

