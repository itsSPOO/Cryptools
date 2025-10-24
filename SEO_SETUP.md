# دليل إعداد SEO وخدمات Google

## 📋 قائمة المهام قبل النشر

### 1. إعداد Google Analytics
1. اذهب إلى [Google Analytics](https://analytics.google.com/)
2. أنشئ حساب جديد أو استخدم حساب موجود
3. أنشئ خاصية (Property) جديدة
4. احصل على Measurement ID (يبدأ بـ `G-XXXXXXXXXX`)
5. استبدل `G-XXXXXXXXXX` في ملف `index.html` (السطر 71 و 76) بـ Measurement ID الخاص بك

### 2. إعداد Google AdSense
1. اذهب إلى [Google AdSense](https://www.google.com/adsense/)
2. قدّم طلب للانضمام إلى AdSense
3. بعد الموافقة، احصل على Publisher ID (يبدأ بـ `ca-pub-XXXXXXXXXXXXXXXX`)
4. استبدل `ca-pub-XXXXXXXXXXXXXXXX` في:
   - ملف `index.html` (السطر 80)
   - ملف `src/components/AdBanner.tsx` (السطر 27)
5. أنشئ وحدات إعلانية (Ad Units) في لوحة تحكم AdSense
6. احصل على Slot IDs لكل وحدة إعلانية
7. استبدل Slot IDs في `src/components/AdBanner.tsx`:
   - `AdBannerHorizontal`: السطر 42
   - `AdBannerSidebar`: السطر 50
   - `AdBannerInFeed`: السطر 58

### 3. إعداد Google Search Console
1. اذهب إلى [Google Search Console](https://search.google.com/search-console/)
2. أضف موقعك (https://cryptools.vercel.app)
3. تحقق من ملكية الموقع (يمكنك استخدام Google Analytics للتحقق)
4. أرسل ملف sitemap.xml:
   - اذهب إلى "Sitemaps" في القائمة الجانبية
   - أضف عنوان: `https://cryptools.vercel.app/sitemap.xml`
5. راقب الأداء والفهرسة

### 4. تحديث الروابط في الملفات
استبدل `https://cryptools.vercel.app` بالدومين الفعلي في:
- `index.html` (السطر 6, 21)
- `public/robots.txt` (السطر 10)
- `public/sitemap.xml` (جميع روابط `<loc>`)

## 🎯 أماكن الإعلانات المضافة

### 1. إعلان أفقي علوي (Top Banner)
- **الموقع**: أعلى المحتوى الرئيسي
- **الحجم**: تلقائي (responsive)
- **الملف**: `App.tsx` - السطر 81

### 2. إعلان داخل المحتوى (In-Feed)
- **الموقع**: بين المحتوى والفوتر
- **الحجم**: fluid (يتكيف مع المحتوى)
- **الملف**: `App.tsx` - السطر 92
- **ملاحظة**: يظهر فقط عند اختيار أداة

### 3. إعلان جانبي (Sidebar) - متاح للاستخدام
- **الموقع**: يمكن إضافته في Sidebar
- **الحجم**: تلقائي
- **الملف**: `src/components/AdBanner.tsx`

## 🔍 تحسينات SEO المضافة

### Meta Tags
- ✅ Description محسّن مع كلمات مفتاحية
- ✅ Keywords شاملة لجميع الأدوات
- ✅ Robots meta tags
- ✅ Canonical URL
- ✅ Language و Revisit-after

### Open Graph & Twitter Cards
- ✅ OG tags كاملة للمشاركة على وسائل التواصل
- ✅ Twitter Card tags
- ✅ Site name و locale

### Structured Data (JSON-LD)
- ✅ Schema.org WebApplication
- ✅ قائمة كاملة بالميزات
- ✅ معلومات السعر (مجاني)

### ملفات SEO
- ✅ `robots.txt` محسّن مع تعليمات للبوتات
- ✅ `sitemap.xml` شامل لجميع الأدوات
- ✅ Favicon محدّث

## 📊 نصائح لتحسين الظهور في البحث

### 1. المحتوى
- أضف وصف تفصيلي لكل أداة
- أضف أمثلة استخدام
- أضف أسئلة شائعة (FAQ)

### 2. الأداء
- تأكد من سرعة تحميل الموقع
- استخدم Lighthouse للتحقق من الأداء
- قم بضغط الصور والملفات

### 3. الروابط الخلفية (Backlinks)
- شارك الموقع على وسائل التواصل
- اكتب مقالات تقنية وأضف رابط الموقع
- سجل الموقع في دلائل المواقع التقنية

### 4. التحديثات المنتظمة
- أضف أدوات جديدة بانتظام
- حدّث المحتوى
- حدّث تاريخ lastmod في sitemap.xml

## 🚀 خطوات النشر

1. ✅ تأكد من تحديث جميع IDs (Analytics, AdSense)
2. ✅ تأكد من تحديث الروابط بالدومين الفعلي
3. ✅ اختبر الموقع محلياً: `npm run dev`
4. ✅ ابني الموقع: `npm run build`
5. ✅ انشر على Vercel: `vercel --prod`
6. ✅ أرسل sitemap إلى Google Search Console
7. ✅ راقب الأداء في Analytics

## 📱 اختبار الإعلانات

بعد النشر:
1. انتظر موافقة AdSense (قد يستغرق أيام)
2. تحقق من ظهور الإعلانات بشكل صحيح
3. استخدم AdSense Auto Ads كبديل إذا لزم الأمر
4. راقب الأداء في لوحة تحكم AdSense

## 🔗 روابط مفيدة

- [Google Analytics](https://analytics.google.com/)
- [Google AdSense](https://www.google.com/adsense/)
- [Google Search Console](https://search.google.com/search-console/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**ملاحظة**: تأكد من الالتزام بسياسات Google AdSense وتجنب النقر على إعلاناتك الخاصة.
