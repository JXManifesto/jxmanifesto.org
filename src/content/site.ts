export type Locale = "en" | "fa";
export const locales: Locale[] = ["en", "fa"];
export const isLocale = (locale: string): locale is Locale => locales.includes(locale as Locale);
export const siteUrl = "https://JXManifesto.org";
export const githubUrl = "https://github.com/JXManifesto/jxmanifesto.org";

export const content = {
  en: {
    dir: "ltr", langName: "English", updated: "June 22, 2026",
    nav: { manifesto: "Manifesto", principles: "Principles", about: "About", contribute: "Contribute", license: "License" },
    home: { eyebrow: "Versioned, open, humane", title: "A manifesto for better Journalist Experience.", intro: "JX—Journalist Experience—is the quality of the everyday systems, tools, rhythms, and decisions that shape how journalism is made.", primary: "Read the Manifesto", secondary: "Contribute on GitHub" },
    manifesto: { title: "The JX Manifesto", subtitle: "Journalism is public work. The conditions of that work shape what the public receives.", quote: "Editorial quality is inseparable from the experience of the people who produce it.", license: "This manifesto text is shared under Creative Commons Attribution 4.0 International / CC BY 4.0.", sections: [
      ["Journalism is also a working experience", "Journalism is not only a published article, broadcast, or post. It is also the lived process of finding, verifying, editing, packaging, and explaining information under pressure."],
      ["Tools shape editorial quality", "Every CMS field, alert, dashboard, template, and workflow nudges editorial choices. Better tools make careful work easier."],
      ["Speed must not destroy accuracy", "Fast publishing matters, but speed is not a license to weaken verification, context, or care."],
      ["Newsrooms need humane workflows", "A newsroom that normalizes exhaustion eventually weakens judgment. Sustainable rhythms are an editorial requirement."],
      ["Technology should serve editorial judgment", "Automation, analytics, and AI are useful only when they make human editorial judgment clearer, better documented, and more accountable."],
      ["Transparency, attribution, and accountability matter", "Good JX makes sources, edits, corrections, rights, and responsibilities visible at the right moments."],
      ["AI must augment journalists, not erase them", "AI should reduce repetitive labor, expand access, and support verification without replacing responsibility or authorship."],
      ["The future newsroom should be open, measurable, and humane", "JX should be discussed openly, improved iteratively, and measured by its impact on people, process, and public value."] ] },
    about: { title: "About JX", body: ["Journalist Experience is a lens for improving the systems around journalism: editorial workflows, publishing tools, verification routines, collaboration habits, analytics, and automation.", "It matters because the public sees the final story, but journalists live inside the machinery that makes the story possible. When that machinery is hostile, opaque, or rushed, quality suffers.", "JXManifesto.org is an open, versioned manifesto. It is meant to evolve through discussion, translation, and public revision."] },
    contribute: { title: "Contribute", body: ["Suggest edits through GitHub issues, pull requests, translations, or discussions.", "A pull request is best for precise wording changes. An issue is best for questions, missing principles, or larger proposals.", "The manifesto is versioned so readers can see how ideas change over time."], cta: "Open the repository" },
    licensePage: { title: "License", body: ["The manifesto text is available under CC BY 4.0. You may share and adapt it, including for commercial purposes, if you give appropriate attribution.", "Attribution is required. Please name JX Manifesto and link back to the project or license where practical."], link: "Official CC BY 4.0 license" }
  },
  fa: {
    dir: "rtl", langName: "فارسی", updated: "۲ تیر ۱۴۰۵",
    nav: { manifesto: "بیانیه", principles: "اصول", about: "درباره", contribute: "مشارکت", license: "مجوز" },
    home: { eyebrow: "نسخه‌مند، باز، انسانی", title: "بیانیه‌ای برای تجربهٔ بهتر روزنامه‌نگار.", intro: "JX یا تجربهٔ روزنامه‌نگار، کیفیت ابزارها، فرایندها، ریتم کاری و تصمیم‌هایی است که تولید روزنامه‌نگاری را شکل می‌دهد.", primary: "خواندن بیانیه", secondary: "مشارکت در گیت‌هاب" },
    manifesto: { title: "بیانیهٔ JX", subtitle: "روزنامه‌نگاری کاری عمومی است؛ شرایط انجام این کار، کیفیت چیزی را که به جامعه می‌رسد شکل می‌دهد.", quote: "کیفیت تحریریه از تجربهٔ کسانی که آن را می‌سازند جدا نیست.", license: "متن این بیانیه با مجوز Creative Commons Attribution 4.0 International / CC BY 4.0 منتشر می‌شود.", sections: [
      ["روزنامه‌نگاری یک تجربهٔ کاری هم هست", "روزنامه‌نگاری فقط خروجی منتشرشده نیست؛ فرایند یافتن، راستی‌آزمایی، ویرایش، بسته‌بندی و توضیح اطلاعات زیر فشار زمان نیز بخشی از آن است."],
      ["ابزارها کیفیت تحریریه را شکل می‌دهند", "هر فیلد در سامانهٔ انتشار، هر هشدار، داشبورد و قالب، انتخاب‌های تحریریه را جهت می‌دهد. ابزار بهتر، کار دقیق را آسان‌تر می‌کند."],
      ["سرعت نباید دقت را نابود کند", "انتشار سریع مهم است، اما سرعت مجوزی برای حذف راستی‌آزمایی، زمینه و مراقبت نیست."],
      ["تحریریه‌ها به گردش‌کار انسانی نیاز دارند", "تحریریه‌ای که فرسودگی را عادی کند، در نهایت قضاوت حرفه‌ای را تضعیف می‌کند. ریتم پایدار، نیاز تحریریه‌ای است."],
      ["فناوری باید در خدمت قضاوت تحریریه باشد", "اتوماسیون، تحلیل داده و هوش مصنوعی زمانی مفیدند که قضاوت انسانی را روشن‌تر، مستندتر و پاسخ‌گوتر کنند."],
      ["شفافیت، انتساب و پاسخ‌گویی مهم‌اند", "JX خوب، منبع‌ها، ویرایش‌ها، اصلاحیه‌ها، حقوق و مسئولیت‌ها را در زمان درست قابل‌دیدن می‌کند."],
      ["هوش مصنوعی باید روزنامه‌نگاران را توانمند کند، نه حذف", "هوش مصنوعی باید کار تکراری را کم کند، دسترسی را گسترش دهد و به راستی‌آزمایی کمک کند؛ بی‌آنکه مسئولیت و مؤلف بودن را پاک کند."],
      ["تحریریهٔ آینده باید باز، سنجش‌پذیر و انسانی باشد", "JX باید آشکارا بحث شود، مرحله‌به‌مرحله بهبود یابد و با اثرش بر انسان، فرایند و ارزش عمومی سنجیده شود."] ] },
    about: { title: "دربارهٔ JX", body: ["تجربهٔ روزنامه‌نگار لنزی برای بهتر کردن سامانه‌های پیرامون روزنامه‌نگاری است: گردش‌کار تحریریه، ابزار انتشار، روال‌های راستی‌آزمایی، همکاری، سنجه‌ها و اتوماسیون.", "این موضوع مهم است چون مخاطب محصول نهایی را می‌بیند، اما روزنامه‌نگار درون سازوکاری زندگی می‌کند که آن محصول را ممکن می‌کند. اگر این سازوکار خصمانه، مبهم یا شتاب‌زده باشد، کیفیت آسیب می‌بیند.", "JXManifesto.org بیانیه‌ای باز و نسخه‌مند است و باید با گفت‌وگو، ترجمه و بازنگری عمومی تکامل پیدا کند."] },
    contribute: { title: "مشارکت", body: ["پیشنهادهای خود را از راه issue، pull request، ترجمه یا گفت‌وگو در گیت‌هاب مطرح کنید.", "Pull request برای تغییرهای دقیق در متن مناسب است. Issue برای پرسش، اصل‌های جاافتاده یا پیشنهادهای بزرگ‌تر بهتر است.", "بیانیه نسخه‌مند است تا خوانندگان بتوانند تغییر ایده‌ها را در طول زمان ببینند."], cta: "باز کردن مخزن" },
    licensePage: { title: "مجوز", body: ["متن بیانیه با مجوز CC BY 4.0 منتشر می‌شود. می‌توانید آن را بازنشر یا اقتباس کنید، حتی برای استفادهٔ تجاری، به شرط آنکه انتساب مناسب بدهید.", "انتساب الزامی است. در صورت امکان نام JX Manifesto و پیوند پروژه یا مجوز را ذکر کنید."], link: "صفحهٔ رسمی مجوز CC BY 4.0" }
  }
} as const;

export const principles = (locale: Locale) => content[locale].manifesto.sections.map(([title, summary], index) => ({ number: index + 1, title, summary }));
export const alternateLocale = (locale: Locale): Locale => (locale === "en" ? "fa" : "en");
