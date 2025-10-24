# ✅ قائمة التحقق قبل النشر

## 🔧 الإعدادات المطلوبة

### 1. Google Analytics
- [ ] إنشاء حساب Google Analytics
- [ ] الحصول على Measurement ID (G-XXXXXXXXXX)
- [ ] استبدال ID في `index.html` السطر 71 و 76

### 2. Google AdSense
- [ ] التقديم على Google AdSense
- [ ] الحصول على Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
- [ ] استبدال Publisher ID في:
  - `index.html` السطر 80
  - `src/components/AdBanner.tsx` السطر 27
- [ ] إنشاء 3 وحدات إعلانية (Horizontal, Sidebar, In-Feed)
- [ ] استبدال Slot IDs في `src/components/AdBanner.tsx`

### 3. تحديث الروابط
- [ ] استبدال `https://cryptools.vercel.app` بالدومين الفعلي في:
  - `index.html`
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `.env.example`

### 4. ملفات البيئة
- [ ] نسخ `.env.example` إلى `.env`
- [ ] ملء جميع المتغيرات في `.env`

## 🚀 خطوات النشر

### البناء والاختبار
```bash
# 1. تثبيت التبعيات
npm install

# 2. اختبار محلي
npm run dev

# 3. بناء الإنتاج
npm run build

# 4. معاينة البناء
npm run preview
```

### النشر على Vercel
```bash
# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

## 📊 بعد النشر

### Google Search Console
1. [ ] إضافة الموقع في Search Console
2. [ ] التحقق من الملكية
3. [ ] إرسال sitemap.xml
4. [ ] مراقبة الفهرسة

### Google Analytics
1. [ ] التحقق من عمل التتبع
2. [ ] إعداد الأهداف (Goals)
3. [ ] مراقبة الزوار

### Google AdSense
1. [ ] انتظار موافقة AdSense (قد يستغرق أيام)
2. [ ] التحقق من ظهور الإعلانات
3. [ ] مراقبة الأداء

### SEO
1. [ ] اختبار الموقع على [PageSpeed Insights](https://pagespeed.web.dev/)
2. [ ] اختبار Structured Data على [Rich Results Test](https://search.google.com/test/rich-results)
3. [ ] التحقق من sitemap.xml
4. [ ] التحقق من robots.txt

## 📝 ملاحظات مهمة

- ⚠️ لا تنقر على إعلاناتك الخاصة (قد يؤدي لحظر الحساب)
- ⚠️ تأكد من محتوى عالي الجودة للموافقة على AdSense
- ⚠️ قد يستغرق ظهور الموقع في نتائج البحث أسابيع
- ⚠️ حدّث sitemap.xml عند إضافة أدوات جديدة

## 🔗 روابط مفيدة

- [Google Analytics](https://analytics.google.com/)
- [Google AdSense](https://www.google.com/adsense/)
- [Google Search Console](https://search.google.com/search-console/)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## 📖 للمزيد من التفاصيل

راجع ملف [SEO_SETUP.md](./SEO_SETUP.md) للحصول على تعليمات مفصلة.
