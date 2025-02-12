import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "خدمات",
    url: "#features",
  },
  {
    id: "1",
    title: "قیمت",
    url: "#pricing",
  },
  {
    id: "2",
    title: "نحوه ی استفاده",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "نقشه راه",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "ساخت اکانت جدید",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "ورود",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "تولید کننده عکس",
  "افزایش دهنده کیفیت عکس",
  "چت با هوش مصنوعی",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "شناسایی صدا",
    text: "امکان فهم و پاسخ‌گویی ربات به دستورات صوتی، تا کاربران بتوانند به راحتی بدون نیاز به لمس صفحه با اپلیکیشن تعامل کنند.",
    date: "1403 اردیبهشت",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "بازی",
    text: "افزودن المان‌های شبیه به بازی، مانند نشان‌ها یا رتبه‌بندی‌ها، برای تشویق کاربران به استفاده بیشتر از ربات چت.",
    date: "1403 خرداد",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "رباط شخصی سازی شده",
    text: "امکان شخصی‌سازی ظاهر و رفتار ربات توسط کاربران، تا تجربه تعامل با ربات جذاب‌تر و سرگرم‌کننده‌تر شود.",
    date: "1403 تیر",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "یکپارچگی با Api ها",
    text: "چندین هوش مصنوعی قدرتمند دنیا پاسخگوی شما هستند. با اطمینان استفاده کنید.",
    date: "1403 شهریور",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "با اتوماسیون هوشمند و امنیت عالی، این بهترین راه‌حل برای تیم‌هایی‌ هست که می‌خوان کارشون رو هوشمندتر انجام بدن.";

export const collabContent = [
  {
    id: "0",
    title: "یکپارچگی بدون مشکل",
  },
  {
    id: "1",
    title: "اتوماسیون هوشمند",
  },
  {
    id: "2",
    title: "امنیت بی نظیر",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "فیگما",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "نوشن",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "دیسکورد",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "اسلک",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "فتوشاپ",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "پروتاپی",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "فریمر",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "رین دراپ",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "پایه",
    description: "ربات چت هوشمند، پیشنهادات شخصی‌سازی‌شده",
    price: "رایگان",
    features: [
      "ربات چت هوشمندی که می‌تواند سوالات شما را درک کند",
      "پیشنهادات شخصی‌سازی‌شده بر اساس علایق شما",
      "امکان استفاده از اپلیکیشن و ویژگی‌های آن بدون هیچ هزینه‌ای",
    ],
  },
  {
    id: "1",
    title: "پیشرفته",
    description: "ربات چت پیشرفته هوشمند، پشتیبانی اولویت‌دار، داشبورد آنالیز",
    price: "1.5میلیون تومان",
    features: [
      "ربات چت پیشرفته که می‌تواند سوالات پیچیده را درک کند",
      "داشبورد آنالیز برای پیگیری مکالمات شما",
      "پشتیبانی اولویت‌دار برای حل سریع مشکلات",
    ],
  },
  {
    id: "2",
    title: "شرکتی",
    description: "ربات چت سفارشی، آنالیز پیشرفته، حساب کاربری اختصاصی",
    price: "تماس بگیرید",
    features: [
      "ربات چت هوشمندی که می‌تواند سوالات شما را درک کند",
      "پیشنهادات شخصی‌سازی‌شده بر اساس علایق شما",
      "امکان استفاده از اپلیکیشن و ویژگی‌های آن بدون هیچ هزینه‌ای",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "هر سوالی بپرسید",
    text: "به کاربران این امکان را می‌دهد تا به سرعت به سوالاتشان پاسخ پیدا کنند بدون اینکه نیاز باشد به منابع مختلف جستجو کنند.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "هر روز بهتر شوید",
    text: "اپلیکیشن از پردازش زبان طبیعی برای درک سوالات کاربران و ارائه پاسخ‌های دقیق و مرتبط استفاده می‌کند.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "اتصال در هر جا",
    text: "با ربات چت هوشمند از هر جایی، روی هر دستگاهی، ارتباط برقرار کنید و دسترسی و راحتی بیشتری داشته باشید.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "پاسخ سریع",
    text: "به کاربران این امکان را می‌دهد تا به سرعت پاسخ سوالاتشان را پیدا کنند بدون اینکه نیاز باشد به منابع مختلف جستجو کنند.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "هر سوالی بپرسید",
    text: "به کاربران این امکان را می‌دهد تا به سرعت به سوالاتشان پاسخ پیدا کنند بدون اینکه نیاز باشد به منابع مختلف جستجو کنند.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "هر روز بهتر شوید",
    text: "اپلیکیشن از پردازش زبان طبیعی برای درک سوالات کاربران و ارائه پاسخ‌های دقیق و مرتبط استفاده می‌کند.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "دیسکورد",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "توییتر",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "اینستاگرام",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "تلگرام",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "فیسبوک",
    iconUrl: facebook,
    url: "#",
  },
];
