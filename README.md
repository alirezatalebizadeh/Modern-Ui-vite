<div align="center">
  

  <h3 align="center">آموزش ساخت سایت با ظاهر مدرن</h3>
  <h5 align="center">[دموی سایت](https://modern-ui-vite.vercel.app/)</h5>

   <div align="center">
     ممنونم از jsmastery بابت این آموزش🙏🌹 <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> .
    </div>
</div>


![Capture](https://github.com/user-attachments/assets/a415d4c8-25e0-48ca-a8c9-672d44e8a9fb)

![Capture1](https://github.com/user-attachments/assets/4eb46e98-b639-4d40-bc35-8cd99a8809d2)

![Capture2](https://github.com/user-attachments/assets/896c4776-6197-499e-bbf7-e03e28919b33)

## 📋 <a name="table">جدول محتوا</a>

1. 🤖 [توضیحات](#introduction)
2. ⚙️ [پکیج ها](#tech-stack)
3. 🔋 [خدمات](#features)
4. 🤸 [شروع](#quick-start)
5. 🕸️ [تنظیمات](#snippets)
6. 🔗 [لینک ها](#links)


## 🚨 آموزش

آموزش خارجی این پروژه <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.



<a href="https://youtu.be/B91wc5dCEBA" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 مقدمه</a>
این پروژه توسعه داده شده با react , tailwind , react router dom هست. ایمدوارم بتونه توی مرحله آموزش کمکتون کنه . نکات مفیدی رو بهتون یاد بده

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ پکیج ها</a>

- Vite
- React.js
- Tailwind CSS

## <a name="features">🔋 خدمات</a>

👉 **بخش‌های زیبا**: شامل بخش‌های هیرور (صفحه اصلی)، خدمات، ویژگی‌ها، نحوه استفاده، نقشه راه، قیمت‌گذاری، فوتر و هدر.

👉 **انیمیشن‌های پارالاکس**: افکت‌های جذابی که با حرکت موس و اسکرول کردن فعال می‌شوند.

👉 **هندسه پیچیده UI**: استفاده از tailwindcss برای طراحی اشکال پیچیده مانند نمایش ویژگی‌های دایره‌ای، خطوط شبکه و خطوط جانبی.

👉 **جدیدترین روندهای طراحی UI**: استفاده از عناصر طراحی مدرن مانند شبکه‌های بنتو.

👉 **گرادیانت‌های جذاب**: بهبود جلوه‌های بصری با استفاده از گرادیانت‌های شیک با Tailwind CSS برای کارت‌ها، دکمه‌ها و غیره.

👉 **ریسپانسیو**: تضمین عملکرد و زیبایی بصری بی‌وقفه در تمامی دستگاه‌ها.

و بسیاری ویژگی‌های دیگر، از جمله معماری کد و قابلیت استفاده مجدد.

## <a name="quick-start">🤸 شروع</a>

برای راه‌اندازی پروژه به‌صورت محلی روی دستگاه خود، مراحل زیر را دنبال کنید.


**پکیج ها**

اطمینان حاصل کنید که موارد زیر روی دستگاه شما نصب شده باشد:



- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/brainwave.git
cd brainwave
```

**نصب**

نصب همه پکیج ها با npm
```bash
npm install
```

*راه اندازی پروژه**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) روی این پورت میتونین پروژه رو ببینین..

## <a name="snippets">🕸️ تنظیمات</a>

<details>
<summary><code>.vscode/settings.json</code></summary>

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
  },
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.jsxSingleQuote": false,
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "always",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[svg]": {
    "editor.defaultFormatter": "jock.svg"
  }
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap");

@import "tailwindcss";

:root {
  --font-sora: "Sora", sans-serif;
  --font-code: "Source Code Pro", monospace;
  --font-grotesk: "Space Grotesk", sans-serif;
  color-scheme: dark;
}

* {
  scroll-behavior: smooth;
}

.text-n-1 {
  color: "#FFFFFF";
}
.text-n-2 {
  color: "#CAC6DD";
}
.text-n-3 {
  color: "#ADA8C3";
}
.text-n-4 {
  color: "#757185";
}
.text-n-5 {
  color: "#3F3A52";
}
.text-n-6 {
  color: "#252134";
}
.text-n-7 {
  color: "#15131D";
}
.text-n-8 {
  color: "#0E0C15";
}
.text-n-9 {
  color: "#474060";
}
.text-n-10 {
  color: "#43435C";
}
.text-n-11 {
  color: "#1B1B2E";
}
.text-n-12 {
  color: "#2E2A41";
}
.text-n-13 {
  color: "#6C7275";
}

.bg-n-1 {
  background-color: "#FFFFFF";
}
.bg-n-2 {
  background-color: "#CAC6DD";
}
.bg-n-3 {
  background-color: "#ADA8C3";
}
.bg-n-4 {
  background-color: "#757185";
}
.bg-n-5 {
  background-color: "#3F3A52";
}
.bg-n-6 {
  background-color: "#252134";
}
.bg-n-7 {
  background-color: "#15131D";
}
.bg-n-8 {
  background-color: "#0E0C15";
}
.bg-n-9 {
  background-color: "#474060";
}
.bg-n-10 {
  background-color: "#43435C";
}
.bg-n-11 {
  background-color: "#1B1B2E";
}
.bg-n-12 {
  background-color: "#2E2A41";
}
.bg-n-13 {
  background-color: "#6C7275";
}
.ltr {
  direction: ltr;
}

.container {
  @apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem];
}
.h1 {
  @apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem];
}
.h2 {
  @apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight;
}
.h3 {
  @apply text-[2rem] leading-normal md:text-[2.5rem];
}
.h4 {
  @apply text-[2rem] leading-normal;
}

.h5 {
  @apply text-2xl leading-normal;
}
.h6 {
  @apply font-semibold text-lg leading-8;
}
.body-1 {
  @apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8;
}

.body-2 {
  @apply font-light text-[0.875rem] leading-6 md:text-base;
}

.caption {
  @apply text-sm;
}

.tagline {
  @apply  font-light text-xs  uppercase;
}
.quote {
  @apply  text-lg leading-normal;
}
.button {
  @apply  text-xs font-bold uppercase tracking-wider;
}
.tap-highlight-color {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}



body {
  @apply font-sans bg-[#0E0C15]  text-base;
  color: "#ffffff";
  direction: rtl;
}

.rotate-45 {
  @apply rotate-[45deg];
}

.rotate-90 {
  @apply rotate-[90deg];
}

.rotate-135 {
  @apply rotate-[135deg];
}

.rotate-180 {
  @apply rotate-[180deg];
}

.rotate-225 {
  @apply rotate-[225deg];
}

.rotate-270 {
  @apply rotate-[270deg];
}

.rotate-315 {
  @apply rotate-[315deg];
}

.rotate-360 {
  @apply rotate-[360deg];
}

.-rotate-45 {
  @apply rotate-[-45deg];
}

.-rotate-90 {
  @apply rotate-[-90deg];
}

.-rotate-135 {
  @apply rotate-[-135deg];
}

.-rotate-180 {
  @apply rotate-[-180deg];
}

.-rotate-225 {
  @apply rotate-[-225deg];
}

.-rotate-270 {
  @apply rotate-[-270deg];
}

.-rotate-315 {
  @apply rotate-[-315deg];
}

.-rotate-360 {
  @apply rotate-[-360deg];
}

```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
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
} from "../../public/assets";

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
    price: "۹.۹۹ دلار",
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
```

</details>

<details>
<summary><code>components/Section.jsx</code></summary>

```javascript
import SectionSvg from "../../public/assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => (
  <div
    id={id}
    className={`relative 
    ${
      customPaddings ||
      `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
    } ${className || ""}`}
  >
    {children}

    <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
    <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

    {crosses && (
      <>
        <div
          className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
            crossesOffset && crossesOffset
          } pointer-events-none lg:block xl:left-10 right-10`}
        />
        <SectionSvg crossesOffset={crossesOffset} />
      </>
    )}
  </div>
);

export default Section;
```

</details>

<details>
<summary><code>components/Roadmap.jsx</code></summary>

```javascript
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./TagLine";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../../public/assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
```

</details>

## <a name="links">🔗 Links</a>

- [Assets](https://drive.google.com/file/d/1JKzwPl_hnpjIlNbwfjMagb4HosxnyXbf/view?usp=sharing)
- [Design](https://drive.google.com/file/d/15WJMOchujvaQ7Kg9e0nGeGR7G7JOeX1K/view?usp=sharing)
- [Absolute Relative Positioning](https://css-tricks.com/absolute-positioning-inside-relative-positioning/)
- [Live Website](https://jsm-brainwave.com/)
