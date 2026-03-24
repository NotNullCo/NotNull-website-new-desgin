
import React from 'react';
import { Code, StatusUp as Rocket, SecuritySafe as Shield, Cpu, Global as Globe, Designtools as Layout, QuoteUp as Quote, Grid9 as LayoutGrid, Card as CreditCard, Bank as Building2, Shop as ShoppingBag, Flash as Zap, Health as HeartPulse, Mobile as Smartphone, Colorfilter as Palette, Cloud, Chart as BarChart3, SearchNormal as Search, DirectboxSend as Share2, Headphone as Headphones, DocumentFilter as FileSearch, PenTool, Command as Terminal, TickCircle as CheckCircle, StatusUp as RocketIcon, MessageText as MessageCircle, Video, VideoPlay as Film, Message as Mail, Cloud as Server, Printer, Box as Package, Notification as Megaphone, Hierarchy as Layers, UserTick as UserCheck, DocumentText as FileText, ShieldTick as ShieldCheck, Cpu as Brain } from 'iconsax-reactjs';
import { Service, Project } from './types';

export const COLORS = {
  gold: '#d4af37',
  dark: '#050505',
  accent: '#b8860b'
};

export const TRANSLATIONS = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      projects: 'الأعمال',
      team: 'الفريق',
      contact: 'تواصل معنا',
    },
    hero: {
      subtitle: 'صياغة المستقبل الرقمي بفخامة المسند',
      cta_start: 'ابدأ رحلتك',
      cta_work: 'معرض الأعمال',
    },
    about: {
      badge: 'عن نوت نول',
      title: 'نبتكر التكنولوجيا التي تُلهم المستقبل الرقمي',
      desc: 'في !Null، نؤمن بأن التكنولوجيا لا ينبغي أن تعمل فحسب، بل يجب أن تكون مصدراً للإلهام. نحن شركة تطوير برمجيات تطلعية متخصصة في ابتكار حلول الويب والتطبيقات المدعومة بالذكاء الاصطناعي.',
      mission_title: 'رسالتنا (Mission)',
      mission_desc: 'صياغة تطبيقات ذكية، قابلة للتوسع، وتتمحور حول المستخدم؛ لمساعدة عملائنا على البقاء في طليعة المنافسة.',
      vision_title: 'رؤيتنا (Vision)',
      vision_desc: 'ندمج الخبرة التقنية العميقة مع التصميم الأنيق لنقدم منتجات برمجية تضع بصمة حقيقية في السوق العالمي.',
    },
    process: {
      badge: 'رحلة الإتقان',
      title: 'كيف نصنع الفارق؟',
      desc: 'منهجية دقيقة تضمن تحويل رؤيتك إلى واقع رقمي ملموس.'
    },
    faq: {
      badge: 'تساؤلات',
      title: 'الأسئلة الشائعة',
      desc: 'كل ما تحتاج معرفته عن بدء مشروعك البرمجي معنا.'
    },
    services: {
      badge: 'منظومة الحلول',
      title: 'خدماتنا التقنية المتكاملة',
      desc: 'نقدم مجموعة شاملة من الحلول الرقمية التي تغطي كافة احتياجات نمو أعمالكم في العصر الحديث.',
      more: 'اكتشف التفاصيل',
      load_more: 'عرض المزيد من الخدمات',
    },
    projects: {
      title: 'معرض المشاريع النوعية',
      desc: 'نخبة من أعمالنا التي تجسد مفهوم Not Null في السوق الرقمي.',
      all: 'الكل',
      view: 'استعراض المشروع',
      load_more: 'استكشاف المزيد من المشاريع',
    },
    testimonials: {
      badge: 'قالوا عنا',
      title: 'ماذا يقول عملاؤنا',
      desc: 'ثقة شركائنا هي الوقود الذي يحرك شغفنا نحو الإتقان.'
    },
    team: {
      title: 'نخبة العقول المبدعة',
      desc: 'فريق يجمع بين الخبرة العميقة والشغف بالابتكار.',
      join: 'انضم إلى فريقنا المبدع',
    },
    clients: {
      title: 'شركاء النجاح الرقمي',
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'دعنا نبدأ رحلة النجاح',
      hours: 'ساعات العمل',
      hours_val: 'السبت - الخميس: 9 ص - 6 م',
      phone: 'الهاتف',
      support: 'الدعم الفني',
      support_val: 'متاح على مدار الساعة عبر الواتساب',
      name_label: 'الاسم الكامل',
      email_label: 'عنوان البريد الإلكتروني',
      msg_label: 'تفاصيل المشروع',
      send: 'إرسال الرسالة الآن',
    },
    footer: {
      copy: 'شركة Not Null للبرمجيات.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Portfolio',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Crafting the Digital Future with Musnad Luxury',
      cta_start: 'Start Your Journey',
      cta_work: 'View Portfolio',
    },
    about: {
      badge: 'About Not Null',
      title: 'Innovating Technology that Inspires the Future',
      desc: 'At !Null, we believe technology shouldn\'t just work; it should inspire. We are a forward-thinking software company specializing in web solutions and AI-powered applications.',
      mission_title: 'Our Mission',
      mission_desc: 'Crafting smart, scalable, user-centric applications to keep our clients ahead in the fast-paced digital world.',
      vision_title: 'Our Vision',
      vision_desc: 'Merging deep technical expertise with elegant design to deliver software products that leave a true mark globally.',
    },
    process: {
      badge: 'Mastery Journey',
      title: 'How We Make a Difference?',
      desc: 'A precise methodology ensuring your vision becomes a tangible digital reality.'
    },
    faq: {
      badge: 'Queries',
      title: 'Frequently Asked Questions',
      desc: 'Everything you need to know about starting your software project with us.'
    },
    services: {
      badge: 'Solution Ecosystem',
      title: 'Integrated Tech Services',
      desc: 'We provide a comprehensive range of digital solutions covering all your business growth needs.',
      more: 'Explore Details',
      load_more: 'View More Services',
    },
    projects: {
      title: 'Featured Projects Gallery',
      desc: 'A selection of our work embodying the Not Null concept in the digital market.',
      all: 'All',
      view: 'View Project',
      load_more: 'Explore More Projects',
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Customers Say',
      desc: 'Our partners\' trust is the fuel that drives our passion for perfection.'
    },
    team: {
      title: 'Creative Minds Elite',
      desc: 'A team combining deep experience with a passion for innovation.',
      join: 'Join Our Creative Team',
    },
    clients: {
      title: 'Digital Success Partners',
    },
    contact: {
      badge: 'Contact Us',
      title: 'Let\'s Start the Success Journey',
      hours: 'Working Hours',
      hours_val: 'Sat - Thu: 9 AM - 6 PM',
      phone: 'Phone',
      support: 'Tech Support',
      support_val: 'Available 24/7 via WhatsApp',
      name_label: 'Full Name',
      email_label: 'Email Address',
      msg_label: 'Project Details',
      send: 'Send Message Now',
    },
    footer: {
      copy: 'Not Null Software Solutions.',
    }
  }
};

export const PROCESS_STEPS = [
  {
    id: 1,
    title_ar: 'التحليل والاكتشاف',
    title_en: 'Discovery & Analysis',
    desc_ar: 'نفهم أهدافك، نحلل السوق، ونضع حجر الأساس للمشروع.',
    desc_en: 'We understand your goals, analyze the market, and lay the project foundation.',
    icon: <FileSearch />,
    musnad: '𐩱'
  },
  {
    id: 2,
    title_ar: 'التصميم التجريبي',
    title_en: 'UX/UI Design',
    desc_ar: 'نرسم رحلة المستخدم ونصمم واجهات تعكس فخامة علامتك.',
    desc_en: 'We map the user journey and design interfaces reflecting your brand luxury.',
    icon: <PenTool />,
    musnad: '𐩨'
  },
  {
    id: 3,
    title_ar: 'التطوير البرمجي',
    title_en: 'Development',
    desc_ar: 'نحول التصاميم إلى كود برمجي نظيف، آمن، وعالي الأداء.',
    desc_en: 'We transform designs into clean, secure, high-performance code.',
    icon: <Terminal />,
    musnad: '𐩩'
  },
  {
    id: 4,
    title_ar: 'الجودة والتدقيق',
    title_en: 'Quality Assurance',
    desc_ar: 'اختبارات مكثفة لضمان خلو النظام من الثغرات والأخطاء.',
    desc_en: 'Intensive testing to ensure the system is free of bugs and vulnerabilities.',
    icon: <CheckCircle />,
    musnad: '𐩬'
  },
  {
    id: 5,
    title_ar: 'الإطلاق والنمو',
    title_en: 'Launch & Support',
    desc_ar: 'تسليم المنتج للسوق مع دعم فني مستمر لضمان النجاح.',
    desc_en: 'Delivering the product to market with continuous technical support.',
    icon: <RocketIcon />,
    musnad: '𐩰'
  }
];

export const FAQ_DATA = [
  {
    id: 1,
    q_ar: 'كم تستغرق مدة تنفيذ المشروع؟',
    q_en: 'How long does project execution take?',
    a_ar: 'تختلف المدة بناءً على حجم المشروع وتعقيده، ولكن عادة ما تستغرق المشاريع المتوسطة من 8 إلى 12 أسبوعاً.',
    a_en: 'Duration varies based on size and complexity, but medium projects usually take 8-12 weeks.'
  },
  {
    id: 2,
    q_ar: 'هل تقدمون ضماناً ودعماً فنياً بعد الإطلاق؟',
    q_en: 'Do you provide warranty and support after launch?',
    a_ar: 'نعم، نقدم فترة ضمان شاملة ودعم فني مستمر لضمان استقرار النظام وتحديثه وفق المتغيرات.',
    a_en: 'Yes, we provide a comprehensive warranty period and ongoing tech support.'
  },
  {
    id: 3,
    q_ar: 'من يمتلك الكود المصدري للمشروع؟',
    q_en: 'Who owns the source code?',
    a_ar: 'نحن نؤمن بالشفافية؛ العميل يمتلك كامل حقوق الكود المصدري والملكية الفكرية للمشروع بعد التسليم النهائي.',
    a_en: 'We believe in transparency; the client owns full source code rights and intellectual property.'
  },
  {
    id: 4,
    q_ar: 'هل يمكن تطوير المشروع مستقبلاً؟',
    q_en: 'Can the project be developed further in the future?',
    a_ar: 'بالتأكيد، نحن نبني أنظمة قابلة للتوسع (Scalable) تسمح بإضافة ميزات جديدة بكل سهولة.',
    a_en: 'Certainly, we build scalable systems that allow adding new features easily.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name_ar: 'م. فهد السبيعي',
    name_en: 'Eng. Fahad Al-Subaie',
    role_ar: 'الرئيس التنفيذي، واحة التقنية',
    role_en: 'CEO, Tech Oasis',
    text_ar: 'تجربة العمل مع Not Null كانت استثنائية. لقد حولوا رؤيتنا الرقمية إلى واقع يتجاوز التوقعات بدقة واحترافية متناهية.',
    text_en: 'Working with Not Null was exceptional. They transformed our digital vision into a reality that exceeds expectations with extreme precision.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩬'
  },
  {
    id: 2,
    name_ar: 'أ. نورة التميمي',
    name_en: 'Ms. Noura Al-Tamimi',
    role_ar: 'مديرة الابتكار، شركة الرؤية',
    role_en: 'Innovation Manager, Vision Co',
    text_ar: 'ما يميز نوت نول هو اهتمامهم بالتفاصيل الصغيرة ودمج الهوية العربية الأصيلة في حلول تقنية حديثة ومبهرة.',
    text_en: 'What distinguishes Not Null is their attention to small details and merging authentic Arabic identity into modern and impressive tech solutions.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩡'
  },
  {
    id: 3,
    name_ar: 'د. يوسف الأحمدي',
    name_en: 'Dr. Yousef Al-Ahmadi',
    role_ar: 'مؤسس شركة سحاب الرقمية',
    role_en: 'Founder, Sahab Digital',
    text_ar: 'الاحترافية في التعامل والالتزام بالمواعيد والأمن السيبراني العالي يجعلهم الخيار الأول لأي مشروع ضخم.',
    text_en: 'Professionalism, commitment to deadlines, and high cybersecurity make them the first choice for any major project.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩲'
  },
  {
    id: 4,
    name_ar: 'م. سعيد الزهراني',
    name_en: 'Eng. Saeed Al-Zahrani',
    role_ar: 'مدير العمليات، بناء المستقبل',
    role_en: 'Operations Manager, Future Build',
    text_ar: 'السرعة والدقة في التنفيذ هي السمة الغالبة على عمل فريق نوت نول. شكراً لكم على هذا الإبداع التقني.',
    text_en: 'Speed and precision in execution are the dominant characteristics of the Not Null team\'s work. Thank you.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩧'
  },
  {
    id: 5,
    name_ar: 'أ. ليلى الحربي',
    name_en: 'Ms. Layla Al-Harbi',
    role_ar: 'مديرة التسويق الرقمي، مدى',
    role_en: 'Digital Marketing Manager, Mada',
    text_ar: 'تطبيقات الذكاء الاصطناعي التي طوروها لنا ساهمت في نمو مبيعاتنا بشكل ملحوظ وتجربة المستخدم مذهلة.',
    text_en: 'The AI applications they developed for us have significantly contributed to our sales growth.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩨'
  },
  {
    id: 6,
    name_ar: 'م. فيصل الشمري',
    name_en: 'Eng. Faisal Al-Shamri',
    role_ar: 'كبير المهندسين، طاقة بلس',
    role_en: 'Chief Engineer, Energy Plus',
    text_ar: 'تصميم فريد يجمع بين الحداثة والأصالة، لم نجد له مثيل في السوق المحلي. فريق محترف بحق.',
    text_en: 'A unique design combining modernity and authenticity, we haven\'t found its equal in the local market.',
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩩'
  },
  {
    id: 7,
    name_ar: 'م. ياسر القحطاني',
    name_en: 'Eng. Yasser Al-Qahtani',
    role_ar: 'مستشار تقني، أرامكو',
    role_en: 'Tech Consultant, Aramco',
    text_ar: 'القدرة على تطويع التكنولوجيا لخدمة أهداف البيزنس هي نقطة قوة نوت نول الحقيقية.',
    text_en: 'The ability to harness technology for business goals is Not Null\'s real strength.',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩦'
  },
  {
    id: 8,
    name_ar: 'أ. منيرة الراشد',
    name_en: 'Ms. Munira Al-Rashid',
    role_ar: 'مؤسسة تطبيق جود',
    role_en: 'Founder, Jood App',
    text_ar: 'كنا نبحث عن شريك يفهم الثقافة السعودية ويقدم حلاً عالمياً، وهذا ما وجدناه في نوت نول.',
    text_en: 'We were looking for a partner who understands Saudi culture and provides a global solution.',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩢'
  },
  {
    id: 9,
    name_ar: 'د. إبراهيم الخالدي',
    name_en: 'Dr. Ibrahim Al-Khalidi',
    role_ar: 'مدير جامعة المعرفة الرقمية',
    role_en: 'Director, Digital Knowledge Uni',
    text_ar: 'المنصة التعليمية التي بنوها لنا تعد ثورة في كيفية تقديم المحتوى الأكاديمي التفاعلي.',
    text_en: 'The educational platform they built is a revolution in delivering interactive academic content.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩣'
  },
  {
    id: 10,
    name_ar: 'أ. هند العتيبي',
    name_en: 'Ms. Hind Al-Otaibi',
    role_ar: 'ريادية أعمال، فينتك لاب',
    role_en: 'Entrepreneur, FinTech Lab',
    text_ar: 'الالتزام بالأمن السيبراني في تطبيقنا المالي كان مذهلاً، نشعر بالثقة مع هذا الفريق.',
    text_en: 'The commitment to cybersecurity in our financial app was amazing, we feel confident.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩪'
  },
  {
    id: 11,
    name_ar: 'م. تركي الدوسري',
    name_en: 'Eng. Turki Al-Dossari',
    role_ar: 'مدير مشاريع، نيوم',
    role_en: 'Project Manager, NEOM',
    text_ar: 'فريق نوت نول يمتلك رؤية مستقبلية تتماشى مع تطلعاتنا الضخمة، عمل احترافي بكل المقاييس.',
    text_en: 'The Not Null team has a future vision aligned with our giant aspirations.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩥'
  },
  {
    id: 12,
    name_ar: 'أ. مشاعل الحربي',
    name_en: 'Ms. Mashael Al-Harbi',
    role_ar: 'مديرة تجربة العميل، لوجستك',
    role_en: 'CX Manager, Logistics',
    text_ar: 'التطور الذي شهدناه في نظامنا بعد تدخل Not Null كان ملموساً من قبل جميع موظفينا وعملائنا.',
    text_en: 'The improvement we saw in our system after Not Null\'s intervention was felt by all.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    symbol: '𐩬'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name_ar: 'م. أحمد الحميري',
    name_en: 'Eng. Ahmed Al-Hemyari',
    role_ar: 'المؤسس والرئيس التنفيذي | CEO',
    role_en: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    musnadSymbol: '𐩬',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 2,
    name_ar: 'م. سارة القحطاني',
    name_en: 'Eng. Sara Al-Qahtani',
    role_ar: 'رئيسة القسم التقني | CTO',
    role_en: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    musnadSymbol: '𐩡',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name_ar: 'م. خالد اليافعي',
    name_en: 'Eng. Khaled Al-Yafei',
    role_ar: 'خبير الذكاء الاصطناعي | AI Expert',
    role_en: 'AI & Data Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    musnadSymbol: '𐩲',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 4,
    name_ar: 'م. ريما العتيبي',
    name_en: 'Eng. Reema Al-Otaibi',
    role_ar: 'مديرة تجربة المستخدم | UI/UX Lead',
    role_en: 'UI/UX Design Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    musnadSymbol: '𐩩',
    linkedin: '#',
    twitter: '#'
  }
];

export const CLIENTS = [
  { id: 1, name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { id: 2, name: 'Framer', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { id: 3, name: 'Tailwind', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  { id: 4, name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { id: 5, name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { id: 6, name: 'Postgres', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
  { id: 7, name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
  { id: 8, name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title_ar: 'تصميم وتطوير المواقع المبتكرة',
    title_en: 'Innovative Web Solutions',
    desc_ar: 'نبني واجهات رقمية جذابة تلبي تطلعات نشاطك التجاري وتضمن حضوراً قوياً على الويب.',
    desc_en: 'Crafting stunning digital interfaces that reflect your business aspirations and ensure a strong presence.',
    icon: <Globe className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نصمم مواقع عصرية، سريعة، ومتجاوبة بالكامل لتعطي المستخدم تجربة فريدة وتزيد من معدلات التحويل.',
    details_en: 'Modern, fast, and fully responsive websites delivering unique user experiences and higher conversion rates.',
    features_ar: ['تصميم عالي الدقة', 'سرعة تحميل فائقة', 'تحسين واجهة المستخدم', 'تكامل برمجيات مخصص'],
    features_en: ['High-Def Design', 'Ultra-fast Loading', 'UI Optimization', 'Custom Integration'],
    whyUs_ar: 'حلولنا لا تتبع الموضة، بل تصنعها.',
    whyUs_en: 'Our solutions don\'t follow trends, they set them.'
  },
  {
    id: 2,
    title_ar: 'بناء وتطوير تطبيقات الجوال الذكية',
    title_en: 'Smart Mobile Development',
    desc_ar: 'حلول تطبيقية متكاملة لـ iOS و Android توفر تجربة مستخدم استثنائية وبدون عوائق.',
    desc_en: 'Integrated mobile solutions for iOS and Android providing smooth and exceptional experiences.',
    icon: <Smartphone className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'من الفكرة إلى الإطلاق، نبني تطبيقات قوية ترتقي بمستوى خدماتك وتبقيك على اتصال دائم بعملائك.',
    details_en: 'From concept to launch, we build robust apps that elevate your services and keep you connected.',
    features_ar: ['تطبيقات أصلية وهجينة', 'دعم تقني مستمر', 'أداء عالي الأمان', 'واجهة مستخدم تفاعلية'],
    features_en: ['Native & Hybrid Apps', 'Ongoing Tech Support', 'High-Security Performance', 'Interactive UI'],
    whyUs_ar: 'جودة التنفيذ هي ميزتنا التنافسية الأولى.',
    whyUs_en: 'Execution quality is our first competitive edge.'
  },
  {
    id: 3,
    title_ar: 'حلول الذكاء الاصطناعي والبيانات',
    title_en: 'AI & Data Solutions',
    desc_ar: 'نطوع التكنولوجيا الذكية لتحليل البيانات، أتمتة العمليات، وتقديم رؤى مستقبلية دقيقة.',
    desc_en: 'Harnessing smart tech for data analysis, automation, and precise future insights.',
    icon: <Cpu className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'خدمات ذكاء اصطناعي متكاملة تشمل تحليل البيانات الكبيرة وتطوير نماذج تنبؤية لرفع كفاءة أعمالك.',
    details_en: 'Integrated AI services including Big Data analysis and predictive modeling for better efficiency.',
    features_ar: ['أتمتة ذكية للعمليات', 'تحليل بيانات معمق', 'تنبؤات سلوك العملاء', 'نماذج تعلم آلي مخصصة'],
    features_en: ['Smart Automation', 'Deep Data Analysis', 'Customer Behavior Prediction', 'Custom ML Models'],
    whyUs_ar: 'نجعل بياناتك تتحدث لغة النجاح.',
    whyUs_en: 'We make your data speak the language of success.'
  },
  {
    id: 4,
    title_ar: 'تحسين محركات البحث SEO',
    title_en: 'Advanced SEO',
    desc_ar: 'نعزز حضورك في النتائج الأولى لمحركات البحث لضمان وصول العملاء إليك قبل المنافسين.',
    desc_en: 'Boosting your presence in search rankings to ensure clients reach you first.',
    icon: <Search className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'خدمات SEO شاملة تتضمن تحسين الكود، الكلمات المفتاحية، وبناء الروابط لضمان نمو عضوي مستدام.',
    details_en: 'Comprehensive SEO services including code optimization, keywords, and link building.',
    features_ar: ['ظهور عضوي متقدم', 'تحسين محتوي ذكي', 'تحليل المنافسين', 'بناء روابط احترافي'],
    features_en: ['Advanced Organic Rank', 'Smart Content Optimization', 'Competitor Analysis', 'Professional Link Building'],
    whyUs_ar: 'نضع موقعك حيث يراه العالم.',
    whyUs_en: 'We place your site where the world can see it.'
  },
  {
    id: 5,
    title_ar: 'بناء الهويات البصرية المتكاملة',
    title_en: 'Visual Identity Branding',
    desc_ar: 'نصمم هويات بصرية خالدة تعكس قيم علامتك التجارية وتترك انطباعاً قوياً لا ينسى.',
    desc_en: 'Designing timeless visual identities that reflect your values and leave lasting impressions.',
    icon: <Palette className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'تصميم الشعارات، أنظمة الألوان، والخطوط التي تجعل براند نشاطك يتميز بالفخامة والفرادة.',
    details_en: 'Logo design, color systems, and typography that make your brand stand out with luxury.',
    features_ar: ['تصميم شعارات مبتكرة', 'دليل هوية متكامل', 'تصاميم مراسلات', 'هوية بصرية ثابتة'],
    features_en: ['Innovative Logo Design', 'Brand Identity Guidelines', 'Stationery Design', 'Consistent Visual Style'],
    whyUs_ar: 'نحول رؤية علامتك إلى لغة بصرية ساحرة.',
    whyUs_en: 'We turn your brand vision into a charming visual language.'
  },
  {
    id: 6,
    title_ar: 'إدارة المتاجر الإلكترونية',
    title_en: 'E-commerce Mastery',
    desc_ar: 'ننظم عمليات البيع، نحسن تجربة الشراء، ونضمن ظهور متجرك بأبهى صورة لزيادة الأرباح.',
    desc_en: 'Organizing sales operations and improving buying experiences for maximum profit.',
    icon: <ShoppingBag className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'إدارة شاملة للمنتجات، الطلبات، والعملاء لضمان سير العمل في تجارتك الإلكترونية بسلاسة.',
    details_en: 'Complete management of products, orders, and clients for a smooth e-commerce workflow.',
    features_ar: ['تحسين رحلة الشراء', 'إدارة المخزون والطلبات', 'زيادة معدل التحويل', 'واجهة متجر احترافية'],
    features_en: ['Checkout Optimization', 'Inventory Management', 'Conversion Rate Boost', 'Professional Storefront'],
    whyUs_ar: 'نجعل تجربة التسوق سهلة، ممتعة، ومربحة.',
    whyUs_en: 'We make shopping easy, fun, and profitable.'
  },
  {
    id: 7,
    title_ar: 'استضافة وإدارة النظم السحابية',
    title_en: 'Managed Cloud Hosting',
    desc_ar: 'استضافة مُدارة على سيرفرات عالية الأداء مع دعم تقني شامل يضمن استقرار أعمالك وثباتها.',
    desc_en: 'Managed hosting on high-performance servers with comprehensive technical support.',
    icon: <Server className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'خدمات سحابية آمنة، نسخ احتياطي يومي، وحماية قصوى لبياناتك ومواقعك على مدار الساعة.',
    details_en: 'Secure cloud services, daily backups, and maximum protection for your data 24/7.',
    features_ar: ['استقرار بنسبة 99.9%', 'حماية من الهجمات الموجهة', 'دعم فني على مدار العام', 'توسعة موارد لحظية'],
    features_en: ['99.9% Uptime Guarantee', 'Anti-DDoS Protection', 'Technical Support 24/7', 'Instant Resource Scaling'],
    whyUs_ar: 'نحمي مشروعك ونبقيه متصلاً بالعالم دون انقطاع.',
    whyUs_en: 'We protect your project and keep it connected without interruption.'
  },
  {
    id: 8,
    title_ar: 'تفعيل حسابات المطورين الرسمية',
    title_en: 'Official Developer Accounts',
    desc_ar: 'نختصر عليك الإجراءات المعقدة ونفعل حساباتك الرسمية بضمان كامل في المنصات العالمية.',
    desc_en: 'Simplifying complex procedures and activating official accounts on global platforms.',
    icon: <UserCheck className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'إنشاء وتفعيل حسابات Apple و Google و Huawei للمطورين لضمان نشر تطبيقاتك دون عوائق إدارية.',
    details_en: 'Creating and activating Apple, Google, and Huawei dev accounts for hassle-free publishing.',
    features_ar: ['ضمان التفعيل الكامل', 'تجاوز العوائق التقنية', 'دعم إجراءات التحقق', 'سرعة في الإنجاز'],
    features_en: ['Guaranteed Activation', 'Overcoming Tech Hurdles', 'Verification Support', 'Fast Turnaround'],
    whyUs_ar: 'نجعل طريقك لنشر التطبيقات ممهداً بالكامل.',
    whyUs_en: 'We pave your way to publishing apps effortlessly.'
  },
  {
    id: 9,
    title_ar: 'إصدار رقم التعريف العالمي DUNS',
    title_en: 'DUNS Number Issuance',
    desc_ar: 'إصدار رقم D-U-N-S المعتمد عالمياً، وهو المتطلب الأساسي لتفعيل الحسابات التجارية للشركات.',
    desc_en: 'Issuing the globally recognized D-U-N-S number, a key requirement for corporate business accounts.',
    icon: <FileText className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'خدمة متكاملة للشركات لإصدار الرقم المعتمد من Dun & Bradstreet لتسهيل التعاملات التقنية الدولية.',
    details_en: 'Complete service for companies to issue the D&B approved number for international tech compliance.',
    features_ar: ['اعتماد Apple Developer', 'توثيق هوية الشركة', 'تسهيل التعاملات العابرة للحدود', 'تسجيل دقيق للبيانات'],
    features_en: ['Apple Dev Compliance', 'Company Identity Verification', 'Cross-border Ease', 'Accurate Data Registration'],
    whyUs_ar: 'نمنح شركتك الهوية التجارية المطلوبة عالمياً.',
    whyUs_en: 'We give your company the globally required business identity.'
  },
  {
    id: 10,
    title_ar: 'اختبار وتدقيق تطبيقات Google Play',
    title_en: 'Google Play App Testing',
    desc_ar: 'خدمة متخصصة لفحص تطبيقاتك لمدة 14 يوماً وفق سياسات جوجل الحديثة لضمان جودة النشر.',
    desc_en: 'Specialized 14-day app testing service following Google policies to ensure post-launch quality.',
    icon: <ShieldCheck className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نضمن لك استقرار الأداء وفحص كافة الوظائف عملياً قبل الإصدار النهائي للجمهور.',
    details_en: 'Ensuring performance stability and practical function checks before the final public release.',
    features_ar: ['فحص لمدة 14 يوم', 'تقرير أداء شامل', 'توافق مع سياسات جوجل', 'ضمان استقرار التطبيق'],
    features_en: ['14-Day Testing Cycle', 'Full Performance Report', 'Google Policy Compliance', 'App Stability Assurance'],
    whyUs_ar: 'ننشر تطبيقك باحترافية تامة وخالٍ من الأخطاء.',
    whyUs_en: 'We publish your app professionally and bug-free.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title_ar: 'منصة نول المالية',
    title_en: 'Null Pay Platform',
    category_ar: 'فينتك',
    category_en: 'FinTech',
    imageUrls: ['https://images.unsplash.com/photo-1551288049-bbb652167014?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'نظام دفع إلكتروني متقدم يدمج بين الأمان العالي وسرعة المعالجة.',
    description_en: 'Advanced electronic payment system merging high security with processing speed.',
    details_ar: 'تم تطوير هذه المنصة لتلبي احتياجات الشركات الكبرى في إدارة التدفقات النقدية.',
    details_en: 'Developed to meet major enterprise needs in cash flow management.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features_ar: ['تشفير عسكري', 'دفع QR', 'تقارير ذكية'],
    features_en: ['Military Encryption', 'QR Payment', 'Smart Reports']
  },
  {
    id: 2,
    title_ar: 'نظام المسند اللوجستي',
    title_en: 'Musnad Logistics',
    category_ar: 'مؤسسات',
    category_en: 'Enterprise',
    imageUrls: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'حل متكامل لتتبع الشحنات وإدارة المخازن بالذكاء الاصطناعي.',
    description_en: 'Integrated solution for shipment tracking and AI-based warehouse management.',
    details_ar: 'يساعد النظام الشركات اللوجستية على تقليل التكاليف بنسبة 30%.',
    details_en: 'Helps logistics companies reduce costs by up to 30%.',
    technologies: ['Python', 'Django', 'Redis'],
    features_ar: ['تتبع حي', 'توقعات مخزون', 'إدارة أسطول'],
    features_en: ['Live Tracking', 'Stock Forecast', 'Fleet Management']
  },
  {
    id: 3,
    title_ar: 'متجر سدير الفاخر',
    title_en: 'Sudair Luxury Shop',
    category_ar: 'تجارة إلكترونية',
    category_en: 'E-commerce',
    imageUrls: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'منصة تسوق عالمية مخصصة للمنتجات الفاخرة مع نظام ذكاء اصطناعي للمقترحات.',
    description_en: 'Global shopping platform for luxury goods with an AI recommendation system.',
    details_ar: 'تصميم يجسد الرقي مع أداء تقني يفوق التوقعات لضمان تجربة تسوق سلسة.',
    details_en: 'A design embodying sophistication with technical performance exceeding expectations.',
    technologies: ['Next.js', 'Shopify', 'Tailwind'],
    features_ar: ['توصيات ذكية', 'دفع آمن متعدد العملات', 'تتبع شحنات ذكي'],
    features_en: ['Smart Recommendations', 'Multi-currency Secure Pay', 'Smart Tracking']
  },
  {
    id: 4,
    title_ar: 'حلول نجد السحابية',
    title_en: 'Najd Cloud Solutions',
    category_ar: 'مؤسسات',
    category_en: 'Enterprise',
    imageUrls: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'بنية تحتية سحابية متقدمة لإدارة البيانات الكبيرة والذكاء الاصطناعي.',
    description_en: 'Advanced cloud infrastructure for Big Data and AI management.',
    details_ar: 'نظام يضمن استمرارية الأعمال بنسبة 99.9% مع حماية سيبرانية قصوى.',
    details_en: 'System ensuring 99.9% business continuity with extreme cyber protection.',
    technologies: ['Kubernetes', 'AWS', 'Go'],
    features_ar: ['توسع تلقائي', 'حماية DDoS', 'تحليلات لحظية'],
    features_en: ['Auto-scaling', 'DDoS Protection', 'Real-time Analytics']
  },
  {
    id: 5,
    title_ar: 'تطبيق نبض الصحي',
    title_en: 'Nabdh Health App',
    category_ar: 'تقنية صحية',
    category_en: 'HealthTech',
    imageUrls: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'تطبيق للهواتف الذكية يستخدم الذكاء الاصطناعي لتشخيص الحالات الصحية الأولية.',
    description_en: 'Smartphone app using AI for primary health case diagnosis.',
    details_ar: 'يهدف التطبيق لتقريب المسافة بين المريض والطبيب باستخدام أحدث تقنيات Vision AI.',
    details_en: 'The app aims to close the distance between patient and doctor using Vision AI.',
    technologies: ['Flutter', 'TensorFlow', 'Firebase'],
    features_ar: ['تشخيص ذكي', 'حجز مواعيد فوري', 'ملف طبي مشفر'],
    features_en: ['AI Diagnosis', 'Instant Booking', 'Encrypted Health Record']
  },
  {
    id: 6,
    title_ar: 'بوابة المها التعليمية',
    title_en: 'Al-Maha Learning Portal',
    category_ar: 'تعليم ذكي',
    category_en: 'EdTech',
    imageUrls: ['https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'منصة تعليم تفاعلية تدمج الواقع المعزز في المناهج الدراسية.',
    description_en: 'Interactive learning platform integrating AR into school curricula.',
    details_ar: 'تجربة تعليمية غامرة تساعد الطلاب على استيعاب المفاهيم المعقدة بسهولة.',
    details_en: 'Immersive educational experience helping students grasp complex concepts easily.',
    technologies: ['Unity', 'React', 'GraphQL'],
    features_ar: ['فصول واقع معزز', 'تتبع تقدم الطالب', 'محتوى تفاعلي 3D'],
    features_en: ['AR Classrooms', 'Student Progress Tracking', 'Interactive 3D Content']
  },
  {
    id: 7,
    title_ar: 'نظام مأرب لإدارة الموارد',
    title_en: 'Marib ERP System',
    category_ar: 'مؤسسات',
    category_en: 'Enterprise',
    imageUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'نظام شامل لإدارة الموارد البشرية والمالية مصمم للشركات العملاقة.',
    description_en: 'Comprehensive ERP for HR and Finance designed for mega corporations.',
    details_ar: 'تكامل تام بين الأقسام لضمان تدفق معلومات سلس ودقيق.',
    details_en: 'Full integration between departments to ensure smooth and accurate information flow.',
    technologies: ['C#', '.NET Core', 'SQL Server'],
    features_ar: ['إدارة رواتب مؤتمتة', 'تقارير ذكاء أعمال', 'واجهة مستخدم عصرية'],
    features_en: ['Automated Payroll', 'BI Reporting', 'Modern UI']
  },
  {
    id: 8,
    title_ar: 'منصة الكود العربي',
    title_en: 'Arabic Code Platform',
    category_ar: 'أدوات مطورين',
    category_en: 'DevTools',
    imageUrls: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'],
    description_ar: 'بيئة تطوير متكاملة تدعم البرمجة باللغة العربية والخط المسند.',
    description_en: 'IDE supporting programming in Arabic and Musnad script.',
    details_ar: 'أول بيئة تطوير تهدف لتعريب المفاهيم البرمجية بعمق تقني حقيقي.',
    details_en: 'The first IDE aimed at localizing programming concepts with deep technical depth.',
    technologies: ['TypeScript', 'Rust', 'WebAssembly'],
    features_ar: ['محرر ذكي', 'مفسر لغة مخصص', 'دعم الخط المسند'],
    features_en: ['Smart Editor', 'Custom Interpreter', 'Musnad Script Support']
  }
];

export const FILTER_ICONS: Record<string, React.ReactNode> = {
  'الكل': <LayoutGrid size={16} />,
  'All': <LayoutGrid size={16} />,
  'فينتك': <CreditCard size={16} />,
  'FinTech': <CreditCard size={16} />,
  'مؤسسات': <Building2 size={16} />,
  'Enterprise': <Building2 size={16} />,
  'تجارة إلكترونية': <ShoppingBag size={16} />,
  'E-commerce': <ShoppingBag size={16} />,
  'تقنية صحية': <HeartPulse size={16} />,
  'HealthTech': <HeartPulse size={16} />,
  'تعليم ذكي': <Zap size={16} />,
  'EdTech': <Zap size={16} />,
  'أدوات مطورين': <Code size={16} />,
  'DevTools': <Code size={16} />,
};
