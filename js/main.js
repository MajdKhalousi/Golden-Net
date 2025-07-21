// main.js - نظام الترجمة المتكامل

/**
 * تحميل ملفات الترجمة وتطبيقها
 * @param {string} lang - رمز اللغة (ar/tr)
 */
async function loadLanguage(lang) {
  try {
    // تحميل ملف الترجمة المناسب
    const response = await fetch(`lang/${lang}.json`);
    
    if (!response.ok) {
      throw new Error(`خطأ في تحميل الترجمة: ${response.status}`);
    }
    
    const translations = await response.json();
    
    // تطبيق الترجمة
    applyTranslations(translations, lang);
    
    // تحديث واجهة المستخدم للغة المختارة
    updateLanguageUI(lang);
    
    // حفظ اللغة المفضلة
    localStorage.setItem('language', lang);
    
    console.log(`تم تحميل اللغة ${lang} بنجاح`);
  } catch (error) {
    console.error('حدث خطأ في نظام الترجمة:', error);
    // استرجاع اللغة السابقة في حالة الخطأ
    const fallbackLang = localStorage.getItem('language') || 'ar';
    if (fallbackLang !== lang) {
      loadLanguage(fallbackLang);
    }
  }
}

/**
 * تطبيق الترجمة على العناصر في الصفحة
 * @param {object} translations - كائن الترجمة
 * @param {string} lang - رمز اللغة
 */
function applyTranslations(translations, lang) {
  // تغيير اتجاه الصفحة حسب اللغة
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = lang;
  
  // 1. الترجمة العادية لعناصر data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
  
  // 2. الترجمة للعناصر ذات الـ ID المباشر
  Object.keys(translations).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[key];
      
      // معالجة خاصية placeholder لعناصر الإدخال
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[key];
      }
    }
  });
  
  // 3. تحديث روابط الواتساب حسب اللغة
  updateWhatsAppLinks(lang);
}

/**
 * تحديث واجهة المستخدم للغة المختارة
 * @param {string} lang - رمز اللغة
 */
function updateLanguageUI(lang) {
  // تحديث أزرار اللغة النشطة
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // إضافة كلاس للغة الحالية على body
  document.body.classList.remove('lang-ar', 'lang-tr');
  document.body.classList.add(`lang-${lang}`);
}

/**
 * تحديث روابط الواتساب حسب اللغة
 * @param {string} lang - رمز اللغة
 */
function updateWhatsAppLinks(lang) {
  const phoneNumbers = {
    primary: '905522886112',
    secondary: '905388899919'
  };
  
  const messages = {
    ar: {
      default: 'مرحباً، أود الاستفسار عن خدماتكم',
      golden: 'أريد الاشتراك في الباقة الذهبية',
      silver: 'أريد الاشتراك في الباقة الفضية',
      bronze: 'أريد الاشتراك في الباقة البرونزية'
    },
    tr: {
      default: 'Merhaba, hizmetleriniz hakkında bilgi almak istiyorum',
      golden: 'Altın pakete abone olmak istiyorum',
      silver: 'Gümüş pakete abone olmak istiyorum',
      bronze: 'Bronz pakete abone olmak istiyorum'
    }
  };
  
  // تحديث جميع روابط الواتساب
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const type = link.dataset.whatsapp || 'default';
    const number = link.dataset.phone === 'secondary' ? phoneNumbers.secondary : phoneNumbers.primary;
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(messages[lang][type])}`;
  });
}

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  // تحميل اللغة المحفوظة أو اللغة الافتراضية
  const savedLang = localStorage.getItem('language') || 'ar';
  loadLanguage(savedLang);
  
  // إضافة أحداث النقر لأزرار تغيير اللغة
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== savedLang) {
        loadLanguage(lang);
      }
    });
  });
  
  // متابعة تغييرات اللغة (للاستخدام المتقدم)
  window.addEventListener('languageChanged', (e) => {
    console.log('تم تغيير اللغة إلى:', e.detail.lang);
  });
});

// يمكنك استدعاء هذه الدالة يدوياً إذا أردت تغيير اللغة من مكان آخر
function setLanguage(lang) {
  if (['ar', 'tr'].includes(lang)) {
    loadLanguage(lang);
    
    // إطلاق حدث مخصص
    const event = new CustomEvent('languageChanged', {
      detail: { lang }
    });
    window.dispatchEvent(event);
  } else {
    console.warn('الغة غير مدعومة:', lang);
  }
}

