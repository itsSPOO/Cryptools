# 🚀 تعليمات النشر على GitHub Pages

## ✅ الإعدادات المكتملة

### 1. إعدادات المشروع
- ✅ `package.json` يحتوي على `homepage` صحيح
- ✅ `vite.config.ts` يحتوي على `base: '/Cryptools/'`
- ✅ ملف `.nojekyll` موجود في `public/`
- ✅ GitHub Actions workflow جاهز في `.github/workflows/deploy.yml`

### 2. الملفات المحذوفة
- ✅ `vercel.json` (غير مطلوب للـ GitHub Pages)
- ✅ `public/_headers` و `public/_redirects` (مخصصة لـ Netlify)

## 🔧 خطوات النشر

### الطريقة الأولى: GitHub Actions (مُوصى بها)
1. اذهب إلى إعدادات المستودع (Repository Settings)
2. اختر "Pages" من القائمة الجانبية
3. في "Source" اختر "GitHub Actions"
4. ادفع التغييرات إلى الفرع `main`
5. سيتم النشر تلقائياً عبر GitHub Actions

### الطريقة الثانية: النشر اليدوي
```bash
# تثبيت gh-pages
npm install -D gh-pages

# النشر
npm run deploy
```

## 🌐 الرابط النهائي
بعد النشر، سيكون الموقع متاحاً على:
`https://itsspoo.github.io/Cryptools`

## 🔍 التحقق من النشر
1. تأكد من أن GitHub Actions يعمل بنجاح
2. تحقق من أن الموقع يعمل على الرابط أعلاه
3. تأكد من أن جميع الأدوات تعمل بشكل صحيح

## 📝 ملاحظات مهمة
- ⚠️ تأكد من أن اسم المستودع هو `Cryptools` (بحرف C كبير)
- ⚠️ إذا غيرت اسم المستودع، يجب تحديث `homepage` في `package.json` و `base` في `vite.config.ts`
- ⚠️ قد يستغرق النشر بضع دقائق في المرة الأولى
