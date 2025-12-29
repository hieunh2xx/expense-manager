// OCR utility để nhận diện văn bản từ ảnh
// Note: Trong production, bạn nên sử dụng Google Cloud Vision API, AWS Textract, hoặc Tesseract.js

export interface OCRResult {
  text: string;
  amount?: number;
  items?: string[];
  merchant?: string;
  date?: Date;
}

// Mock OCR function - Trong thực tế, bạn sẽ gọi API OCR thật
export const recognizeTextFromImage = async (imageUri: string): Promise<OCRResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Mock result - Trong production, đây sẽ là kết quả từ OCR API
  // Bạn có thể tích hợp với:
  // - Google Cloud Vision API
  // - AWS Textract
  // - Tesseract.js (client-side)
  // - Firebase ML Kit
  
  const mockResults: OCRResult[] = [
    {
      text: 'HÓA ĐƠN BÁN HÀNG\nCửa hàng: Siêu thị Co.opmart\nNgày: 15/12/2024\n\nSữa tươi: 45.000đ\nBánh mì: 25.000đ\nTrứng: 54.500đ\n\nTổng cộng: 124.500đ',
      amount: 124500,
      items: ['Sữa tươi', 'Bánh mì', 'Trứng'],
      merchant: 'Siêu thị Co.opmart',
      date: new Date(),
    },
    {
      text: 'Đơn hàng #12345\nShopee\n\nÁo thun: 150.000đ\nQuần short: 200.000đ\nPhí vận chuyển: 30.000đ\n\nTổng: 380.000đ',
      amount: 380000,
      items: ['Áo thun', 'Quần short'],
      merchant: 'Shopee',
      date: new Date(),
    },
  ];

  // Return random mock result
  return mockResults[Math.floor(Math.random() * mockResults.length)];
};

// Parse QR code data
export const parseQRCode = (qrData: string): OCRResult | null => {
  try {
    // Try to parse as JSON first
    const parsed = JSON.parse(qrData);
    if (parsed.amount) {
      return {
        text: qrData,
        amount: parsed.amount,
        merchant: parsed.merchant,
        items: parsed.items,
      };
    }
  } catch {
    // Not JSON, try to extract amount from string
    const amountMatch = qrData.match(/(\d+\.?\d*)/);
    if (amountMatch) {
      return {
        text: qrData,
        amount: parseFloat(amountMatch[1]),
      };
    }
  }
  return null;
};

// Extract amount from text
export const extractAmount = (text: string): number | null => {
  // Vietnamese currency patterns
  const patterns = [
    /(\d{1,3}(?:\.\d{3})*(?:,\d+)?)\s*₫/g,
    /(\d{1,3}(?:\.\d{3})*(?:,\d+)?)\s*đ/g,
    /(\d{1,3}(?:\.\d{3})*(?:,\d+)?)\s*VND/g,
    /tổng[:\s]+(\d{1,3}(?:\.\d{3})*(?:,\d+)?)/gi,
    /(\d{1,3}(?:\.\d{3})*(?:,\d+)?)/g,
  ];

  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (matches && matches.length > 0) {
      // Get the largest number (usually the total)
      const amounts = matches.map(match => {
        const numStr = match.replace(/[^\d,]/g, '').replace(',', '.');
        return parseFloat(numStr);
      });
      return Math.max(...amounts);
    }
  }

  return null;
};

// Extract items from text
export const extractItems = (text: string): string[] => {
  const lines = text.split('\n');
  const items: string[] = [];
  
  for (const line of lines) {
    // Look for lines that contain product names and prices
    if (line.match(/\d+.*₫/) || line.match(/\d+.*đ/)) {
      const itemName = line.split(':')[0]?.trim() || line.split(/\d/)[0]?.trim();
      if (itemName && itemName.length > 2) {
        items.push(itemName);
      }
    }
  }
  
  return items;
};


