// كائنات الترجمة للغتين
const translations = {
    ar: {
        paketTitle: "باقاتنا",
        navProducts: "منتجاتنا",
        navAbout: "من نحن",
        navContact: "التواصل",
        slide1Title: "حلول إنترنت متقدمة",
        slide1Desc: "نقدم أفضل حلول الإنترنت لجميع احتياجاتك الشخصية والتجارية بسرعات فائقة واستقرار متميز",
        slide1Btn: "اكتشف منتجاتنا",
        slide2Title: "خدمة عملاء على مدار الساعة",
        slide2Desc: "فريق دعم فني متاح 24/7 لحل جميع مشاكلك الفنية وتقديم المساعدة الفورية",
        slide2Btn: "تواصل معنا",
        slide3Title: "أسرع شبكة إنترنت في المنطقة",
        slide3Desc: "استمتع بأسرع اتصال بالإنترنت مع تقنيات الجيل الجديد وأعلى معدلات الاستقرار",
        slide3Btn: "تعرف علينا",
        productsTitle: "منتجاتنا",
        product1Title: "إنترنت المنزل",
        product1Desc: "حلول إنترنت عالية السرعة للمنازل مع خيارات متنوعة تناسب جميع الاحتياجات",
        product2Title: "إنترنت الشركات",
        product2Desc: "حلول متكاملة للشركات مع سرعات عالية وتقنيات متقدمة للاستخدام المكثف",
        product3Title: "خدمات الألياف البصرية",
        product3Desc: "أحدث تقنيات الألياف البصرية لتجربة إنترنت فائقة السرعة والاستقرار",
        product4Title: "حلول التخزين السحابي",
        product4Desc: "خدمات تخزين سحابي آمنة وموثوقة مع مساحات كبيرة وسهولة الوصول",
        aboutTitle: "من نحن",
        aboutSubtitle: "شركة إنترنت الرائدة في مجال الاتصالات",
        aboutDesc1: "تأسست شركة إنترنت عام 2010 بهدف تقديم حلول إنترنت متطورة وخدمات اتصالات عالية الجودة للعملاء في جميع أنحاء المنطقة. نحن نؤمن بأن الإنترنت هو حق أساسي للجميع، ونسعى جاهدين لتوفير خدمات متميزة بأسعار تنافسية.",
        aboutDesc2: "مع أكثر من 10 سنوات من الخبرة، استطعنا بناء شبكة قوية وبنية تحتية متطورة تغطي معظم المناطق، مما يضمن لعملائنا تجربة إنترنت سلسة ومستقرة على مدار الساعة.",
        aboutDesc3: "فريقنا المكون من أكثر من 200 موظف مؤهل ومدرب يعمل بجد لتقديم أفضل الخدمات والدعم الفني للعملاء، مع التركيز على الابتكار والتطوير المستمر لتقديم أحدث الحلول التقنية.",
        stat1Title: "سنوات من الخبرة",
        stat2Title: "عميل راضٍ",
        stat3Title: "رضا العملاء",
        contactTitle: "التواصل معنا",
        contactSubtitle: "ابقى على تواصل",
        contactAddressTitle: "العنوان",
        contactAddress: "شارع الاتصالات، برج التقنية، الطابق 10، الرياض، المملكة العربية السعودية",
        contactPhoneTitle: "الهاتف",
        contactPhone1: "+966 11 123 4567",
        contactPhone2: "+966 50 123 4567",
        contactEmailTitle: "البريد الإلكتروني",
        contactEmail1: "info@internet-company.com",
        contactEmail2: "support@internet-company.com",
        contactHoursTitle: "ساعات العمل",
        contactHours1: "الأحد - الخميس: 8 صباحاً - 5 مساءً",
        contactHours2: "الجمعة والسبت: إجازة",
        contactFormTitle: "أرسل لنا رسالة",
        formNameLabel: "الاسم الكامل",
        formEmailLabel: "البريد الإلكتروني",
        formPhoneLabel: "رقم الهاتف",
        formMessageLabel: "الرسالة",
        formSubmitBtn: "إرسال الرسالة",
        footerCompanyName: "شركة إنترنت",
        footerDesc: "نقدم حلول إنترنت متطورة وخدمات اتصالات عالية الجودة لعملائنا في جميع أنحاء المنطقة، مع التركيز على الابتكار والتطوير المستمر.",
        footerLinks1Title: "روابط سريعة",
        footerHomeLink: "الصفحة الرئيسية",
        footerProductsLink: "منتجاتنا",
        footerAboutLink: "من نحن",
        footerContactLink: "التواصل",
        footerFaqLink: "الأسئلة الشائعة",
        footerLinks2Title: "منتجاتنا",
        footerProduct1Link: "إنترنت المنزل",
        footerProduct2Link: "إنترنت الشركات",
        footerProduct3Link: "الألياف البصرية",
        footerProduct4Link: "التخزين السحابي",
        footerProduct5Link: "حلول الأمان",
        footerLinks3Title: "الدعم",
        footerHelpLink: "مركز المساعدة",
        footerSupportLink: "الدعم الفني",
        footerTermsLink: "الشروط والأحكام",
        footerPrivacyLink: "سياسة الخصوصية",
        copyrightText: "جميع الحقوق محفوظة &copy; 2023 شركة إنترنت للاتصالات"
    },
    tr: {
        paketTitle: "paketlerimiz",
        navProducts: "Ürünlerimiz",
        navAbout: "Hakkımızda",
        navContact: "İletişim",
        slide1Title: "Gelişmiş İnternet Çözümleri",
        slide1Desc: "Kişisel ve ticari tüm ihtiyaçlarınız için yüksek hızda ve istikrarlı en iyi internet çözümlerini sunuyoruz",
        slide1Btn: "Ürünlerimizi Keşfedin",
        slide2Title: "7/24 Müşteri Hizmetleri",
        slide2Desc: "Teknik sorunlarınızı çözmek ve anında yardım sağlamak için 7/24 teknik destek ekibimiz hazırdır",
        slide2Btn: "Bizimle İletişime Geçin",
        slide3Title: "Bölgenin En Hızlı İnternet Ağı",
        slide3Desc: "Yeni nesil teknolojiler ve en yüksek istikrar oranlarıyla süper hızlı internet bağlantısının keyfini çıkarın",
        slide3Btn: "Bizi Tanıyın",
        productsTitle: "Ürünlerimiz",
        product1Title: "Ev İnterneti",
        product1Desc: "Tüm ihtiyaçlara uygun çeşitli seçeneklerle evler için yüksek hızlı internet çözümleri",
        product2Title: "İş İnterneti",
        product2Desc: "Yoğun kullanım için yüksek hızlar ve gelişmiş teknolojilerle işletmeler için entegre çözümler",
        product3Title: "Fiber Optik Hizmetler",
        product3Desc: "Süper hızlı ve istikrarlı internet deneyimi için en son fiber optik teknolojileri",
        product4Title: "Bulut Depolama Çözümleri",
        product4Desc: "Geniş alanlar ve kolay erişimle güvenli ve güvenilir bulut depolama hizmetleri",
        aboutTitle: "Hakkımızda",
        aboutSubtitle: "İletişim Sektöründe Lider İnternet Şirketi",
        aboutDesc1: "İnternet Şirketi, 2010 yılında bölgenin her yerindeki müşterilere gelişmiş internet çözümleri ve yüksek kaliteli iletişim hizmetleri sunmak amacıyla kurulmuştur. İnternetin herkes için temel bir hak olduğuna inanıyoruz ve rekabetçi fiyatlarla üstün hizmetler sunmak için çalışıyoruz.",
        aboutDesc2: "10 yılı aşkın deneyimimizle, müşterilerimize 7/24 sorunsuz ve istikrarlı bir internet deneyimi sağlayan güçlü bir ağ ve gelişmiş altyapı inşa ettik.",
        aboutDesc3: "200'den fazla nitelikli ve eğitimli personelden oluşan ekibimiz, yeniliğe ve sürekli gelişime odaklanarak müşterilere en iyi hizmetleri ve teknik desteği sunmak için çalışmaktadır.",
        stat1Title: "Yıllık Deneyim",
        stat2Title: "Memnun Müşteri",
        stat3Title: "Müşteri Memnuniyeti",
        contactTitle: "Bizimle İletişime Geçin",
        contactSubtitle: "İletişimde Kalın",
        contactAddressTitle: "Adres",
        contactAddress: "İletişim Caddesi, Teknoloji Kulesi, Kat 10, Riyad, Suudi Arabistan",
        contactPhoneTitle: "Telefon",
        contactPhone1: "+966 11 123 4567",
        contactPhone2: "+966 50 123 4567",
        contactEmailTitle: "E-posta",
        contactEmail1: "info@internet-company.com",
        contactEmail2: "support@internet-company.com",
        contactHoursTitle: "Çalışma Saatleri",
        contactHours1: "Pazar - Perşembe: 08:00 - 17:00",
        contactHours2: "Cuma ve Cumartesi: Kapalı",
        contactFormTitle: "Bize Mesaj Gönderin",
        formNameLabel: "Tam Adınız",
        formEmailLabel: "E-posta Adresiniz",
        formPhoneLabel: "Telefon Numaranız",
        formMessageLabel: "Mesajınız",
        formSubmitBtn: "Mesajı Gönder",
        footerCompanyName: "İnternet Şirketi",
        footerDesc: "Bölgenin her yerindeki müşterilerimize yenilik ve sürekli gelişime odaklanarak gelişmiş internet çözümleri ve yüksek kaliteli iletişim hizmetleri sunuyoruz.",
        footerLinks1Title: "Hızlı Bağlantılar",
        footerHomeLink: "Ana Sayfa",
        footerProductsLink: "Ürünlerimiz",
        footerAboutLink: "Hakkımızda",
        footerContactLink: "İletişim",
        footerFaqLink: "SSS",
        footerLinks2Title: "Ürünlerimiz",
        footerProduct1Link: "Ev İnterneti",
        footerProduct2Link: "İş İnterneti",
        footerProduct3Link: "Fiber Optik",
        footerProduct4Link: "Bulut Depolama",
        footerProduct5Link: "Güvenlik Çözümleri",
        footerLinks3Title: "Destek",
        footerHelpLink: "Yardım Merkezi",
        footerSupportLink: "Teknik Destek",
        footerTermsLink: "Şartlar ve Koşullar",
        footerPrivacyLink: "Gizlilik Politikası",
        copyrightText: "Tüm Hakları Saklıdır &copy; 2023 İnternet İletişim Şirketi"
    }
};

// دالة تغيير اللغة
function changeLanguage(lang) {
    // تحديث اتجاه الصفحة
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // تحديث جميع النصوص
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'companyName') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// سكريبت السلايدر
document.addEventListener('DOMContentLoaded', function() {
    // عناصر السلايدر
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const slideCount = dots.length;
    
    // دالة تغيير الشريحة
    function goToSlide(slideIndex) {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
    
    // النقر على نقاط التنقل
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // تغيير الشريحة تلقائياً كل 5 ثوانٍ
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }, 5000);
    
    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تغيير اللغة عند النقر على الأزرار
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
});