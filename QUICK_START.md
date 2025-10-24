# 🚀 دليل البدء السريع

## ⚡ البناء والنشر

### 1. اختبار محلي
```bash
npm install
npm run dev
```

### 2. البناء للإنتاج
```bash
npm run build
```

### 3. النشر على Vercel
```bash
vercel --prod
```

## 🔑 الإعدادات المطلوبة

### قبل النشر - استبدل هذه القيم:

#### في `index.html`:
- السطر 71 و 76: `G-XXXXXXXXXX` → Google Analytics Measurement ID
- السطر 80: `ca-pub-XXXXXXXXXXXXXXXX` → Google AdSense Publisher ID

#### في `src/components/AdBanner.tsx`:
- السطر 27: `ca-pub-XXXXXXXXXXXXXXXX` → Google AdSense Publisher ID
- السطر 42: `1234567890` → Ad Slot ID للإعلان الأفقي
- السطر 50: `0987654321` → Ad Slot ID للإعلان الجانبي
- السطر 58: `1122334455` → Ad Slot ID للإعلان الداخلي

#### في جميع الملفات:
استبدل `https://cryptools.vercel.app` بالدومين الفعلي في:
- `index.html` (السطر 6, 21, 39)
- `public/robots.txt` (السطر 10)
- `public/sitemap.xml` (جميع روابط `<loc>`)

## 📊 بعد النشر

1. **Google Search Console**:
   - أضف موقعك على https://search.google.com/search-console/
   - أرسل sitemap: `https://your-domain.com/sitemap.xml`

2. **Google Analytics**:
   - تحقق من عمل التتبع في https://analytics.google.com/

3. **Google AdSense**:
   - انتظر الموافقة (قد يستغرق أيام)
   - راقب الأداء في https://www.google.com/adsense/

## 📖 للمزيد من التفاصيل

- [SEO_SETUP.md](./SEO_SETUP.md) - دليل الإعداد الكامل
- [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md) - قائمة التحقق
- [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) - ملخص التحسينات

---

**ملاحظة**: تأكد من عدم النقر على إعلاناتك الخاصة!
