/* ==========================================================================
   data.js — Content model for the Star Trans Egypt Energy 2026 page.
   All display text is bilingual: { en: "...", ar: "..." }.
   Rendered by main.js; translated/selected by i18n.js.
   ========================================================================== */

const DATA = {
  /* Rotating strip under the hero */
  marquee: [
    { en: 'Transformers',          ar: 'المحولات' },
    { en: 'Voltage Stabilizers',   ar: 'مثبتات الجهد' },
    { en: 'Reactors',              ar: 'المفاعلات' },
    { en: 'Low Voltage Panels',    ar: 'لوحات الجهد المنخفض' },
    { en: 'Medical Isolation',     ar: 'العزل الطبي' },
    { en: 'Power Quality',         ar: 'جودة الطاقة' },
    { en: 'System Protection',     ar: 'حماية الأنظمة' },
    { en: 'Industrial Reliability',ar: 'الموثوقية الصناعية' },
    { en: 'Egypt Energy 2026',     ar: 'إيجيبت إنرجي 2026' }
  ],

  /* Five product families */
  products: [
    {
      key: 'transformers',
      img: 'images/product-transformers.jpg',
      badge: { en: 'Product Line', ar: 'خط إنتاج' },
      title: { en: 'Low Voltage Transformers', ar: 'محولات الجهد المنخفض' },
      desc: {
        en: 'Reliable power for a wide range of applications, with electrical isolation, high efficiency and a durable design.',
        ar: 'طاقة موثوقة لمجموعة واسعة من التطبيقات، مع عزل كهربائي وكفاءة عالية وتصميم متين.'
      },
      items: [
        { en: 'Universal Control Transformer',      ar: 'محول تحكم عالمي' },
        { en: 'Lift Control Transformer',           ar: 'محول تحكم المصاعد' },
        { en: 'Safety for Swimming Pool Transformer',ar: 'محول أمان لحمامات السباحة' },
        { en: 'Universal Transformer for Center Pivot', ar: 'محول عالمي لمحاور الري' },
        { en: 'Single Phase Isolation Transformer', ar: 'محول عزل أحادي الطور' },
        { en: 'Three Phase Isolation Transformer',  ar: 'محول عزل ثلاثي الأطوار' }
      ],
      tags: [
        { en: 'Electrical Isolation', ar: 'عزل كهربائي' },
        { en: 'High Efficiency',      ar: 'كفاءة عالية' },
        { en: 'Durable Design',       ar: 'تصميم متين' }
      ]
    },
    {
      key: 'stabilizers',
      img: 'images/product-stabilizers.jpg',
      badge: { en: 'Product Line', ar: 'خط إنتاج' },
      title: { en: 'Voltage Stabilizers', ar: 'مثبتات الجهد' },
      desc: {
        en: 'Engineered for reliable voltage regulation — protecting sensitive equipment from unstable mains supply.',
        ar: 'مصممة لتنظيم جهد موثوق — تحمي المعدات الحساسة من تقلبات شبكة التغذية.'
      },
      items: [
        { en: 'Single Phase Stabilizer — Servo PRO-S',      ar: 'مثبت أحادي الطور — سيرفو PRO-S' },
        { en: 'Three Phase Stabilizer — Servo PRO-S',       ar: 'مثبت ثلاثي الأطوار — سيرفو PRO-S' },
        { en: 'Three Phase Stabilizer — Servo Linear TPL',  ar: 'مثبت ثلاثي الأطوار — سيرفو لينير TPL' }
      ],
      tags: [
        { en: 'Voltage Stability',     ar: 'استقرار الجهد' },
        { en: 'Reliable Protection',   ar: 'حماية موثوقة' },
        { en: 'Industrial Performance',ar: 'أداء صناعي' }
      ]
    },
    {
      key: 'reactors',
      img: 'images/product-reactors.png',
      badge: { en: 'Product Line', ar: 'خط إنتاج' },
      title: { en: 'Reactors', ar: 'المفاعلات' },
      desc: {
        en: 'Engineered for power quality and system protection — cleaner systems and a longer equipment lifetime.',
        ar: 'مصممة لجودة الطاقة وحماية الأنظمة — أنظمة أنظف وعمر تشغيلي أطول للمعدات.'
      },
      items: [
        { en: 'Line Reactor', ar: 'مفاعل الخط' },
        { en: 'Load Reactor', ar: 'مفاعل الحمل' },
        { en: 'Shunt Reactor', ar: 'مفاعل التوازي' }
      ],
      tags: [
        { en: 'Power Quality',        ar: 'جودة الطاقة' },
        { en: 'System Protection',    ar: 'حماية الأنظمة' },
        { en: 'Industrial Reliability',ar: 'موثوقية صناعية' }
      ]
    },
    {
      key: 'panels',
      img: 'images/product-lv-panels.jpg',
      badge: { en: 'Product Line', ar: 'خط إنتاج' },
      title: { en: 'Low Voltage Panels', ar: 'لوحات الجهد المنخفض' },
      desc: {
        en: 'Reliable distribution for industrial and commercial applications, with high safety and flexible configuration.',
        ar: 'توزيع موثوق للتطبيقات الصناعية والتجارية، مع أمان عالٍ وتكوين مرن.'
      },
      items: [
        { en: 'Main Distribution Panels',  ar: 'لوحات التوزيع الرئيسية' },
        { en: 'Motor Control Centers',     ar: 'مراكز التحكم بالمحركات' },
        { en: 'Capacitor & Filter Banks',  ar: 'بنوك المكثفات والفلاتر' },
        { en: 'Custom Built Assemblies',   ar: 'لوحات مجمعة حسب الطلب' }
      ],
      tags: [
        { en: 'High Safety',         ar: 'أمان عالٍ' },
        { en: 'Flexible Configuration', ar: 'تكوين مرن' },
        { en: 'Reliable Performance',ar: 'أداء موثوق' },
        { en: 'Built for Industry',  ar: 'مصممة للصناعة' }
      ]
    },
    {
      key: 'medical',
      img: 'images/product-medical.jpg',
      badge: { en: 'Product Line', ar: 'خط إنتاج' },
      title: { en: 'Medical Isolation Solutions', ar: 'حلول العزل الطبي' },
      desc: {
        en: 'Safe power for critical environments — engineered to the highest safety standards for medical facilities.',
        ar: 'طاقة آمنة للبيئات الحرجة — مصممة وفق أعلى معايير السلامة للمنشآت الطبية.'
      },
      items: [
        { en: 'Isolation Power Supply Panel',        ar: 'لوحة تغذية معزولة' },
        { en: 'Isolation Transformer for Medical Rooms', ar: 'محول عزل لغرف المرضى' },
        { en: 'Integrated Protection, Monitoring & Alarming', ar: 'حماية ومراقبة وإنذار مدمجة' }
      ],
      tags: [
        { en: 'Patient Safety',       ar: 'سلامة المريض' },
        { en: 'Electrical Isolation', ar: 'عزل كهربائي' },
        { en: 'Medical Standards',    ar: 'المعايير الطبية' }
      ]
    }
  ],

  /* Horizontal gallery — uses the campaign posters */
  gallery: [
    { img: 'images/poster-meet.jpg',       title: { en: 'Meet Star Trans',            ar: 'قابل ستار ترانس' },        sub: { en: 'Egypt Energy 2026 · Hall 2, H2.G50', ar: 'إيجيبت إنرجي 2026 · قاعة 2، H2.G50' } },
    { img: 'images/product-transformers.jpg', title: { en: 'Low Voltage Transformers', ar: 'محولات الجهد المنخفض' },   sub: { en: 'Isolation for every application',    ar: 'عزل لكل التطبيقات' } },
    { img: 'images/product-stabilizers.jpg',  title: { en: 'Stabilizer Solutions',      ar: 'حلول مثبتات الجهد' },      sub: { en: 'Servo PRO-S & Servo Linear TPL',     ar: 'سيرفو PRO-S وسيرفو لينير TPL' } },
    { img: 'images/product-reactors.png',     title: { en: 'Reactor Solutions',         ar: 'حلول المفاعلات' },         sub: { en: 'Line · Load · Shunt',                ar: 'الخط · الحمل · التوازي' } },
    { img: 'images/product-lv-panels.jpg',    title: { en: 'Low Voltage Panels',        ar: 'لوحات الجهد المنخفض' },    sub: { en: 'Safe. Reliable. Versatile.',         ar: 'آمنة. موثوقة. متعددة الاستخدامات.' } },
    { img: 'images/product-medical.jpg',      title: { en: 'Medical Isolation',         ar: 'العزل الطبي' },            sub: { en: 'Reliable power for better care',     ar: 'طاقة موثوقة لرعاية أفضل' } },
    { img: 'images/poster-variant.png',       title: { en: 'Full Power Range',          ar: 'التشكيلة الكاملة' },       sub: { en: 'One integrated portfolio',           ar: 'محفظة متكاملة واحدة' } },
    { img: 'images/booth-render-2.jpg',       title: { en: 'Our Booth',                 ar: 'الجناح الخاص بنا' },       sub: { en: 'Designed for conversation',          ar: 'مصمم للحوار والاجتماعات' } },
    { img: 'images/poster-night.jpg',         title: { en: 'Visit Us',                  ar: 'زورونا' },                 sub: { en: 'Be part of a brighter tomorrow',     ar: 'كونوا جزءًا من غدٍ أكثر إشراقًا' } }
  ]
};
