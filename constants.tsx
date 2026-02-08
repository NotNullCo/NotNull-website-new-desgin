
import React from 'react';
import { Code, Rocket, Shield, Cpu, Globe, Layout, Quote, LayoutGrid, CreditCard, Building2, ShoppingBag, Zap, HeartPulse, Smartphone, Palette, Cloud, BarChart3, Search, Share2, Headphones, FileSearch, PenTool, Terminal, CheckCircle, Rocket as RocketIcon, MessageCircle } from 'lucide-react';
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
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      loc_val: 'الرياض، المملكة العربية السعودية',
      name_label: 'الاسم',
      email_label: 'البريد الإلكتروني',
      msg_label: 'الرسالة',
      send: 'إرسال',
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
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      loc_val: 'Riyadh, Saudi Arabia',
      name_label: 'Name',
      email_label: 'Email Address',
      msg_label: 'Message',
      send: 'Send Message',
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
    title_ar: 'تطوير البرمجيات المخصصة',
    title_en: 'Software Development',
    desc_ar: 'تصميم وبناء حلول برمجية فريدة تلبي احتياجات أعمالك بدقة متناهية وأداء فائق.',
    desc_en: 'Designing and building unique software solutions that precisely meet your business needs.',
    icon: <Code className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نحول أفكارك المعقدة إلى أنظمة برمجية متكاملة وقابلة للتوسع باستخدام أحدث منهجيات التطوير الرشيقة (Agile). نحن نبني أنظمة ERP، منصات SaaS، وتطبيقات المؤسسات الكبرى.',
    details_en: 'We transform your complex ideas into integrated, scalable software systems using the latest Agile methodologies. We build ERP systems, SaaS platforms, and enterprise applications.',
    features_ar: ['هندسة برمجيات دقيقة', 'أنظمة ERP مخصصة', 'أتمتة العمليات البرمجية', 'تطوير SaaS'],
    features_en: ['Precise Software Engineering', 'Custom ERP Systems', 'Process Automation', 'SaaS Development'],
    whyUs_ar: 'نمتلك منهجية صارمة في ضمان جودة الكود واستدامة النظام.',
    whyUs_en: 'We have a rigorous methodology in ensuring code quality and system sustainability.'
  },
  {
    id: 2,
    title_ar: 'تطوير تطبيقات الجوال',
    title_en: 'Mobile Development',
    desc_ar: 'ابتكار تطبيقات جوال ذكية لنظامي iOS و Android توفر تجربة مستخدم استثنائية.',
    desc_en: 'Innovating smart mobile apps for iOS and Android providing exceptional user experiences.',
    icon: <Smartphone className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نعتمد على تقنيات حديثة مثل Flutter و React Native لضمان سرعة الأداء وسلاسة الواجهات. نصمم تطبيقات تجمع بين الوظيفية العالية والجمالية البصرية.',
    details_en: 'We use modern tech like Flutter and React Native to ensure speed and smooth UI. We design apps that combine high functionality with visual aesthetics.',
    features_ar: ['تطبيقات Cross-platform', 'تكامل مع المستشعرات', 'تطبيقات التجارة المحمولة', 'إدارة التنبيهات الذكية'],
    features_en: ['Cross-platform Apps', 'Sensor Integration', 'M-commerce Apps', 'Smart Notification Management'],
    whyUs_ar: 'نركز على تفاعل المستخدم لضمان أعلى نسب الاحتفاظ بالعملاء.',
    whyUs_en: 'We focus on user interaction to ensure the highest customer retention rates.'
  },
  {
    id: 3,
    title_ar: 'تصميم وتطوير المواقع',
    title_en: 'Web Design & Dev',
    desc_ar: 'بناء مواقع ومنصات ويب متطورة تجمع بين السرعة القصوى والتصميم الجذاب والمتجاوب.',
    desc_en: 'Building advanced web platforms combining maximum speed and attractive, responsive design.',
    icon: <Globe className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'من المواقع التعريفية إلى منصات التجارة الضخمة، نقدم حلول ويب تتصدر محركات البحث وتوفر تجربة مستخدم لا تنسى.',
    details_en: 'From landing pages to huge e-commerce platforms, we deliver SEO-leading web solutions that provide an unforgettable user experience.',
    features_ar: ['تصميم متجاوب بالكامل', 'تحسين محركات البحث SEO', 'بوابات دفع آمنة', 'لوحات تحكم ذكية'],
    features_en: ['Fully Responsive Design', 'SEO Optimization', 'Secure Payment Gateways', 'Smart Dashboards'],
    whyUs_ar: 'مواقعنا مصممة لتكون سريعة جداً وآمنة ضد التهديدات.',
    whyUs_en: 'Our sites are designed to be ultra-fast and secure against threats.'
  },
  {
    id: 4,
    title_ar: 'تصميم الجرافيك و UI/UX',
    title_en: 'Graphic & UI/UX Design',
    desc_ar: 'خلق هويات بصرية وواجهات رقمية بديهية وفنية تعزز ارتباط المستخدم بمنتجك.',
    desc_en: 'Creating visual identities and intuitive, artistic digital interfaces enhancing user engagement.',
    icon: <Palette className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نجمع بين سيكولوجية المستخدم وجماليات التصميم لخلق رحلات مستخدم سلسة وهويات بصرية قوية تعبر عن جوهر علامتك التجارية.',
    details_en: 'Merging user psychology and design aesthetics to create smooth user journeys and strong visual identities that express your brand essence.',
    features_ar: ['أبحاث تجربة المستخدم', 'نماذج أولية تفاعلية', 'تصميم واجهات فنية', 'اختبارات الاستخدام'],
    features_en: ['UX Research', 'Interactive Prototypes', 'Artistic UI Design', 'Usability Testing'],
    whyUs_ar: 'نصمم بأسلوب يوازن بين الوظيفة والجمال.',
    whyUs_en: 'We design in a style that balances function and beauty.'
  },
  {
    id: 5,
    title_ar: 'التسويق الرقمي',
    title_en: 'Digital Marketing',
    desc_ar: 'استراتيجيات تسويقية شاملة لزيادة الوعي بالعلامة التجارية وتحقيق عوائد حقيقية.',
    desc_en: 'Comprehensive marketing strategies to increase brand awareness and achieve real ROI.',
    icon: <Share2 className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نستخدم أحدث قنوات التسويق الرقمي للوصول لجمهورك المستهدف وتحويلهم لعملاء دائمين من خلال محتوى جذاب وحملات ممولة ذكية.',
    details_en: 'We use the latest digital marketing channels to reach your target audience and convert them into loyal customers through engaging content and smart paid campaigns.',
    features_ar: ['إدارة الحملات الإعلانية', 'تسويق بالمحتوى', 'تسويق عبر البريد', 'تحليلات الأداء'],
    features_en: ['Campaign Management', 'Content Marketing', 'Email Marketing', 'Performance Analytics'],
    whyUs_ar: 'نحول بياناتك الصامتة إلى رؤى استراتيجية محفزة للنمو.',
    whyUs_en: 'We turn your silent data into growth-driving strategic insights.'
  },
  {
    id: 6,
    title_ar: 'تحسين محركات البحث SEO',
    title_en: 'SEO Services',
    desc_ar: 'رفع تصنيف موقعك في نتائج البحث لجذب المزيد من الزيارات المجانية والمستهدفة.',
    desc_en: 'Raising your site ranking in search results to attract more organic and targeted traffic.',
    icon: <Search className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نطبق أفضل ممارسات SEO التقنية وبناء الروابط لضمان ظهور موقعك في الصفحة الأولى لكلماتك المفتاحية المستهدفة.',
    details_en: 'We apply the best technical SEO practices and link building to ensure your site appears on the first page for your target keywords.',
    features_ar: ['بحث الكلمات المفتاحية', 'SEO تقني', 'بناء روابط (Backlinks)', 'تقارير دورية'],
    features_en: ['Keyword Research', 'Technical SEO', 'Link Building', 'Monthly Reporting'],
    whyUs_ar: 'نعتمد على استراتيجيات بيضاء (White-hat) لضمان نمو مستدام.',
    whyUs_en: 'We rely on white-hat strategies to ensure sustainable growth.'
  },
  {
    id: 7,
    title_ar: 'إدارة الشبكات الاجتماعية',
    title_en: 'Social Media Management',
    desc_ar: 'بناء مجتمعات تفاعلية حول علامتك التجارية عبر مختلف منصات التواصل الاجتماعي.',
    desc_en: 'Building interactive communities around your brand across various social media platforms.',
    icon: <Share2 className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نصمم وننشر محتوى مخصص لكل منصة، وندير التفاعلات مع الجمهور لزيادة الولاء والارتباط بالعلامة التجارية.',
    details_en: 'We design and post custom content for each platform, managing audience interactions to increase loyalty and brand engagement.',
    features_ar: ['صناعة محتوى إبداعي', 'إدارة الحسابات', 'تفاعل مع الجمهور', 'جدولة المنشورات'],
    features_en: ['Creative Content Creation', 'Account Management', 'Audience Engagement', 'Post Scheduling'],
    whyUs_ar: 'نحن نتحدث لغة جمهورك ونخلق حواراً حقيقياً.',
    whyUs_en: 'We speak your audience\'s language and create a real dialogue.'
  },
  {
    id: 8,
    title_ar: 'الدعم الفني والاستضافة',
    title_en: 'IT Support & Hosting',
    desc_ar: 'حلول استضافة سحابية آمنة ودعم فني على مدار الساعة لضمان استمرارية أعمالك.',
    desc_en: 'Secure cloud hosting solutions and 24/7 technical support to ensure your business continuity.',
    icon: <Headphones className="w-8 h-8 text-[#d4af37]" />,
    details_ar: 'نوفر خوادم سحابية عالية الأداء مع نسخ احتياطي تلقائي وحماية سيبرانية، بالإضافة لفريق دعم جاهز لحل أي مشكلة تقنية.',
    details_en: 'We provide high-performance cloud servers with automated backup and cyber protection, plus a support team ready to solve any technical issue.',
    features_ar: ['استضافة سحابية', 'دعم 24/7', 'نسخ احتياطي يومي', 'حماية DDoS'],
    features_en: ['Cloud Hosting', '24/7 Support', 'Daily Backups', 'DDoS Protection'],
    whyUs_ar: 'نضمن استقرار أنظمتك بنسبة تشغيل لا تقل عن 99.9%.',
    whyUs_en: 'We guarantee the stability of your systems with an uptime of at least 99.9%.'
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
