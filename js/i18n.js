/* ==========================================================================
   i18n.js — English / Arabic switching.
   - Translates every element carrying data-i18n="key.path".
   - Switches document direction (ltr / rtl) and Arabic typography.
   - currentLang is read by main.js when rendering dynamic content.
   ========================================================================== */

let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    'brand.tagline': 'TRANSFORMING TECHNOLOGY',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.why': 'Why Us',
    'nav.booth': 'Our Booth',
    'nav.countdown': 'Countdown',
    'nav.event': 'Event',
    'nav.download': 'Catalogue',

    'hero.badge': 'Bronze Sponsor',
    'hero.title1': 'Star Trans at',
    'hero.title2': 'Egypt Energy 2026',
    'hero.sub': 'Transforming technology into reliable power solutions for industrial, commercial and healthcare environments.',
    'hero.cta1': 'Visit Our Booth',
    'hero.cta2': 'Download Catalogue',
    'chip.lv': 'Low Voltage Solutions',
    'chip.safe': 'Safe. Reliable. Versatile.',

    'stat.categories': 'Product Lines',
    'stat.models': 'Models & Ratings',
    'stat.tested': 'Factory Tested',

    'about.eyebrow': 'Who We Are',
    'about.title': 'Engineering reliable power for critical environments',
    'about.lead': 'Star Trans is an Egyptian manufacturer of low voltage power solutions — transformers, voltage stabilizers, reactors, low voltage panels and medical isolation systems. We engineer, build and test every unit in-house to deliver stable, protected and efficient power.',
    'about.body': 'From industrial production lines and elevators to swimming pools, agricultural center pivots, data-driven facilities and hospital operating theatres, our equipment keeps operations running safely — with consistent quality and performance.',
    'about.pillarsTitle': 'Built On Four Pillars',
    'pillar1.t': 'Safety',           'pillar1.d': 'Compliant designs with integrated protection.',
    'pillar2.t': 'Reliability',      'pillar2.d': 'Continuous, stable operation where it matters most.',
    'pillar3.t': 'Flexibility',      'pillar3.d': 'Configurable solutions for every application.',
    'pillar4.t': 'Industrial Build', 'pillar4.d': 'Engineered for demanding environments.',

    'products.eyebrow': 'Our Range',
    'products.title': 'Low Voltage Power Solutions',
    'products.lead': 'Five integrated product families — designed, manufactured and tested to work together.',

    'why.eyebrow': 'Why Star Trans',
    'why.title': 'Engineered for power quality',
    'why.f1t': 'Power Quality',        'why.f1d': 'Better power stability and cleaner systems across your installation.',
    'why.f2t': 'System Protection',    'why.f2d': 'Protects equipment and extends the lifetime of your assets.',
    'why.f3t': 'Industrial Reliability','why.f3d': 'Built for demanding industrial environments and continuous duty.',
    'why.f4t': 'Medical Standards',    'why.f4d': 'Isolation systems compliant with medical safety requirements.',

    'booth.eyebrow': 'Our Booth',
    'booth.title': 'Meet us at Egypt Energy 2026',
    'booth.lead': 'Step into our stand to explore live units of our low voltage solutions, discuss your project requirements with our engineers and discover the right configuration for your application.',
    'booth.tag': 'Hall 2 | H2.G50',
    'booth.i1t': 'Dates',      'booth.i2t': 'Venue',  'booth.i3t': 'Stand',  'booth.i4t': 'Sponsorship',

    'countdown.eyebrow': 'Save the date',
    'countdown.title': 'Countdown to Egypt Energy 2026',
    'countdown.lead': 'The countdown is on. Meet Star Trans at Hall 2, Booth H2.G50.',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'countdown.live': 'The event is live now!',

    'nav.visit': 'Visit Us',

    'visit.eyebrow': 'One Quick Question',
    'visit.title': 'Are you coming to Egypt Energy 2026?',
    'visit.sub': "Tell us whether we'll see you at our stand — Hall 2, Booth H2.G50.",
    'visit.yes': "Yes, I'll be there!",
    'visit.no': "No, I can't make it",
    'visit.again': 'Ask me again',
    'visit.happy': "That's great news — our engineers can't wait to welcome you at Booth H2.G50. Come see the full low voltage range live!",
    'visit.happyCta': 'See Our Booth',
    'visit.sad': "We'll miss you! Our full catalogue is one click away — explore the complete low voltage range at your convenience.",
    'visit.sadCta': 'Browse the Catalogue',

    'event.date': '12–14 October 2026',
    'event.venue': 'Egypt International Exhibition Centre (EIEC), Cairo',
    'event.hall': 'Hall 2 | Booth H2.G50',

    'dl.eyebrow': 'Full Line-Up',
    'dl.title': 'Download the Star Trans Catalogue',
    'dl.lead': 'Explore our complete range of low voltage power solutions — transformers, voltage stabilizers, reactors, low voltage panels and medical isolation systems — with technical details and applications.',
    'dl.btn': 'Download PDF Catalogue',
    'dl.note': 'Downloads the full catalogue PDF. Best viewed on a desktop for the technical tables.',

    'footer.note': 'Meet us at Egypt Energy 2026 — Hall 2, Booth H2.G50.'
  },

  ar: {
    'brand.tagline': 'نحوّل التقنية إلى حلول',

    'nav.about': 'من نحن',
    'nav.products': 'منتجاتنا',
    'nav.why': 'لماذا نحن',
    'nav.booth': 'جناحنا',
    'nav.countdown': 'العد التنازلي',
    'nav.event': 'المعرض',
    'nav.download': 'الكتالوج',

    'hero.badge': 'راعي برونزي',
    'hero.title1': 'ستار ترانس في',
    'hero.title2': 'إيجيبت إنرجي 2026',
    'hero.sub': 'نحوّل التقنية إلى حلول طاقة موثوقة للبيئات الصناعية والتجارية والطبية.',
    'hero.cta1': 'زوروا جناحنا',
    'hero.cta2': 'تحميل الكتالوج',
    'chip.lv': 'حلول الجهد المنخفض',
    'chip.safe': 'آمنة. موثوقة. متعددة الاستخدامات.',

    'stat.categories': 'خطوط منتجات',
    'stat.models': 'موديل وسعة',
    'stat.tested': 'اختبار بالمصنع',

    'about.eyebrow': 'من نحن',
    'about.title': 'هندسة طاقة موثوقة للبيئات الحرجة',
    'about.lead': 'ستار ترانس شركة مصرية متخصصة في تصنيع حلول الجهد المنخفض — المحولات، مثبتات الجهد، المفاعلات، لوحات الجهد المنخفض وأنظمة العزل الطبي. نصمّم ونصنّع ونختبر كل وحدة داخل مصنعنا لتقديم طاقة مستقرة ومحمية وعالية الكفاءة.',
    'about.body': 'من خطوط الإنتاج الصناعية والمصاعد، إلى حمامات السباحة ومحاور الري الزراعية والمنشآت الحيوية وغرف العمليات بالمستشفيات — معداتنا تُبقي التشغيل آمنًا بجودة وأداء ثابتين.',
    'about.pillarsTitle': 'أربع ركائز أساسية',
    'pillar1.t': 'السلامة',        'pillar1.d': 'تصميمات مطابقة للمواصفات مع حماية مدمجة.',
    'pillar2.t': 'الموثوقية',       'pillar2.d': 'تشغيل مستمر ومستقر حيث يكون الأهم.',
    'pillar3.t': 'المرونة',         'pillar3.d': 'حلول قابلة للتخصيص لكل تطبيق.',
    'pillar4.t': 'تصنيع صناعي',     'pillar4.d': 'مصممة للبيئات التشغيلية القاسية.',

    'products.eyebrow': 'تشكيلتنا',
    'products.title': 'حلول الجهد المنخفض',
    'products.lead': 'خمس عائلات منتجات متكاملة — مصممة ومصنّعة ومختبرة لتعمل معًا.',

    'why.eyebrow': 'لماذا ستار ترانس',
    'why.title': 'هندسة من أجل جودة الطاقة',
    'why.f1t': 'جودة الطاقة',       'why.f1d': 'استقرار أفضل للجهد وأنظمة أنظف في منشأتك.',
    'why.f2t': 'حماية الأنظمة',     'why.f2d': 'تحمي المعدات وتطيل عمر أصولك.',
    'why.f3t': 'موثوقية صناعية',    'why.f3d': 'مصممة للبيئات الصناعية القاسية والتشغيل المستمر.',
    'why.f4t': 'معايير طبية',       'why.f4d': 'أنظمة عزل متوافقة مع متطلبات السلامة الطبية.',

    'booth.eyebrow': 'جناحنا',
    'booth.title': 'قابلونا في إيجيبت إنرجي 2026',
    'booth.lead': 'تفضّلوا بزيارة جناحنا لمشاهدة وحداتنا على الطبيعة، ومناقشة متطلبات مشروعكم مع مهندسينا، واكتشاف التكوين المناسب لتطبيقكم.',
    'booth.tag': 'قاعة 2 | H2.G50',
    'booth.i1t': 'التاريخ',  'booth.i2t': 'المكان',  'booth.i3t': 'الجناح',  'booth.i4t': 'الرعاية',

    'countdown.eyebrow': 'سجّل التاريخ',
    'countdown.title': 'العد التنازلي لإيجيبت إنرجي 2026',
    'countdown.lead': 'بدأ العد التنازلي. قابلوا ستار ترانس في قاعة 2، جناح H2.G50.',
    'countdown.days': 'يوم',
    'countdown.hours': 'ساعة',
    'countdown.minutes': 'دقيقة',
    'countdown.seconds': 'ثانية',
    'countdown.live': 'المعرض بدأ الآن!',

    'event.eyebrow': 'المعرض',
    'event.title': 'إيجيبت إنرجي 2026',
    'event.lead': 'المعرض الرائد للطاقة في شمال أفريقيا — ثلاثة أيام من تقنيات توليد ونقل وتوزيع الطاقة وكفاءة استخدامها.',
    'nav.visit': 'زورونا',

    'visit.eyebrow': 'سؤال سريع',
    'visit.title': 'هتحضروا إيجيبت إنرجي 2026؟',
    'visit.sub': 'قولولنا إذا كنا هنشوفكم في جناحنا — قاعة 2، جناح H2.G50.',
    'visit.yes': 'أيوة، هكون موجود!',
    'visit.no': 'للأسف مش هقدر أحضر',
    'visit.again': 'اسألني تاني',
    'visit.happy': 'خبر جميل جدًا — مهندسينا في انتظاركم في جناح H2.G50. تعالوا تشوفوا تشكيلة الجهد المنخفض كاملة على الطبيعة!',
    'visit.happyCta': 'شوفوا جناحنا',
    'visit.sad': 'هنوحشكم! الكتالوج الكامل على بعد ضغطة واحدة — استكشفوا تشكيلة الجهد المنخفض كاملة في أي وقت.',
    'visit.sadCta': 'تصفح الكتالوج',

    'event.date': '12–14 أكتوبر 2026',
    'event.venue': 'مركز مصر الدولي للمعارض (EIEC)، القاهرة',
    'event.hall': 'قاعة 2 | جناح H2.G50',

    'dl.eyebrow': 'التشكيلة الكاملة',
    'dl.title': 'حمّل كتالوج ستار ترانس',
    'dl.lead': 'استكشف تشكيلتنا الكاملة من حلول الجهد المنخفض — المحولات، مثبتات الجهد، المفاعلات، لوحات الجهد المنخفض وأنظمة العزل الطبي — مع التفاصيل الفنية والتطبيقات.',
    'dl.btn': 'تحميل كتالوج PDF',
    'dl.note': 'يتم تحميل كتالوج PDF الكامل. يُفضّل العرض من جهاز كمبيوتر لقراءة الجداول الفنية.',

    'footer.note': 'قابلونا في إيجيبت إنرجي 2026 — قاعة 2، جناح H2.G50.'
  }
};

/* Resolve a dotted key path such as "hero.title1". */
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS.en[key]) || key;
}

/* Pick the right language from a { en, ar } object. */
function pick(obj) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.en || '';
}

/* Apply all static translations + direction + fonts. */
function applyLang(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  const toggleLabel = document.getElementById('langLabel');
  if (toggleLabel) toggleLabel.textContent = lang === 'ar' ? 'English' : 'عربي';

  try { localStorage.setItem('startrans-lang', lang); } catch (e) { /* ignore */ }
}

/* Restore a previously chosen language. */
function initialLang() {
  try {
    const saved = localStorage.getItem('startrans-lang');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch (e) { /* ignore */ }
  return (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
}
