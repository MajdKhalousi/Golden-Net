// main.js - نظام الترجمة المتكامل

/**
 * تحميل ملفات الترجمة وتطبيقها
 * @param {string} lang - رمز اللغة (ar/tr)
 */
async function loadLanguage(lang) {
  try {
    // تحميل ملف الترجمة بصيغة JSON
    const response = await fetch(`lang/${lang}.json`);
    if (!response.ok) {
      throw new Error(`فشل في تحميل ملف الترجمة: ${response.status}`);
    }

    const translations = await response.json();

    // تطبيق الترجمة
    applyTranslations(translations, lang);

    // تحديث الواجهة
    updateLanguageUI(lang);

    // حفظ اللغة في localStorage
    localStorage.setItem('language', lang);

    console.log(`✅ تم تحميل اللغة (${lang}) بنجاح`);
  } catch (error) {
    console.error('❌ خطأ في نظام الترجمة:', error);
    alert('حدث خطأ في تحميل اللغة. سيتم الرجوع إلى اللغة الافتراضية.');

    // استرجاع لغة احتياطية
    const fallbackLang = localStorage.getItem('language') || 'ar';
    if (fallbackLang !== lang) {
      loadLanguage(fallbackLang);
    }
  }
}

/**
 * تطبيق الترجمة على عناصر الصفحة
 * @param {object} translations - كائن الترجمة
 * @param {string} lang - رمز اللغة
 */
function applyTranslations(translations, lang) {
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = lang;

  // 1. الترجمة للعناصر التي تحمل data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  // 2. الترجمة للعناصر حسب ID
  Object.keys(translations).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[key];

      const tag = element.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        element.placeholder = translations[key];
      }
    }
  });

  // 3. تحديث روابط واتساب
  updateWhatsAppLinks(lang);
}

/**
 * تحديث الواجهة للغة المختارة
 * @param {string} lang
 */
function updateLanguageUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.body.classList.remove('lang-ar', 'lang-tr');
  document.body.classList.add(`lang-${lang}`);
}

/**
 * تحديث روابط الواتساب
 * @param {string} lang
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

  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const type = link.dataset.whatsapp || 'default';
    const number = link.dataset.phone === 'secondary' ? phoneNumbers.secondary : phoneNumbers.primary;
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(messages[lang][type])}`;
  });
}

/**
 * تغيير اللغة من أي مكان
 */
function setLanguage(lang) {
  if (['ar', 'tr'].includes(lang)) {
    loadLanguage(lang);

    const event = new CustomEvent('languageChanged', {
      detail: { lang }
    });
    window.dispatchEvent(event);
  } else {
    console.warn('⚠️ لغة غير مدعومة:', lang);
  }
}

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || navigator.language.slice(0, 2) || 'ar';
  loadLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== document.body.lang) {
        setLanguage(lang);
      }
    });
  });

  window.addEventListener('languageChanged', e => {
    console.log('🌐 تم تغيير اللغة إلى:', e.detail.lang);
  });
});

