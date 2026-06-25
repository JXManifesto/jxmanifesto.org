export type Locale = "en" | "fa";
export const locales: Locale[] = ["en", "fa"];
export const isLocale = (locale: string): locale is Locale => locales.includes(locale as Locale);
export const siteUrl = "https://JXManifesto.org";
export const githubUrl = "https://github.com/JXManifesto/jxmanifesto.org";

export const content = {
  en: {
    dir: "ltr",
    langName: "English",
    updated: "June 25, 2026",
    nav: {
      manifesto: "Manifesto",
      principles: "Principles",
      about: "About",
      contribute: "Contribute",
      license: "License",
    },
    home: {
      eyebrow: "A narrative for the future of digital newsrooms",
      title: "Journalist Experience (JX)",
      intro:
        "Journalist Experience is the human, mental, and operational quality of the systems in which journalists find, verify, produce, publish, and understand news.",
      primary: "Read the Manifesto",
      secondary: "Contribute on GitHub",
    },
    manifesto: {
      title: "The Journalist Experience Manifesto",
      subtitle: "Journalist Experience (JX): a narrative for the future of digital newsrooms.",
      quote:
        "A better experience for journalists means a better future for journalism.",
      license:
        "This manifesto text is shared under Creative Commons Attribution 4.0 International / CC BY 4.0.",
      version: "Initial version — 2026 🚀",
      intro: [
        "Journalism has changed more in recent years than at almost any other point in its modern history. Today’s newsrooms are no longer only places where news is produced; they are living, constantly connected, complex networks in which journalists must find stories, verify them, write narratives, choose images and video, prepare material for the web and social platforms, follow audience feedback, and often collaborate with artificial intelligence tools.",
        "Despite these deep changes, many of the tools and systems used in media organizations are still designed around old patterns from another era of journalism. In many newsrooms, journalists are forced to move between dozens of systems, messengers, social networks, and disconnected tools. Much of their mental energy is spent not on storytelling and analysis, but on managing information chaos, complicated processes, and technical friction.",
        "We believe the time has come to recognize Journalist Experience as one of the fundamental questions of the future of media.",
        "Journalist Experience, or JX, is concerned with the quality of the human, mental, and operational experience of journalists throughout content production, editing, publishing, and analysis. It is not simply about interface design or prettier software. The central question is the quality of a journalist’s work and life inside today’s media environment, where speed, information pressure, multitasking, and constant connectivity have become inseparable from the job.",
        "The modern newsroom is not only a news desk. It is a living system where humans, technology, social networks, sources, public relations teams, artificial intelligence, and audiences constantly affect one another. In this environment, every design decision can directly influence the quality of journalism. Every extra click, unclear process, system delay, and piece of information clutter eventually affects a journalist’s focus, accuracy, and narrative quality.",
        "Social networks are no longer merely channels for distributing news. A significant part of journalism now takes shape inside those spaces. Stories are discovered in messengers and social networks, reactions emerge there, and many crises begin online before they ever enter the newsroom. Future newsrooms must be designed around the reality of networked media, not around the print-centered patterns of the past.",
        "Artificial intelligence is also an undeniable reality. Still, we believe the role of AI in the newsroom should not be to replace people. The future of journalism is not the removal of journalists, but effective collaboration between humans and technology. AI is valuable when it reduces cognitive load, smooths workflows, warns about errors, and helps people make more accurate and informed decisions.",
        "Journalist Experience is not only a technological issue. It is also tied to the professional and mental health of journalists. Burnout, cognitive overload, reduced focus, and the constant pressure to publish are part of the reality of many newsrooms today. A media organization that cannot create a healthier, calmer, and more coherent working environment for its journalists will eventually erode not only the quality of its content, but also its human capital and public trust.",
        "The realities of media in Iran and the region make this issue even more important. Many newsrooms face limited resources, small teams, unstable infrastructure, and constant speed pressure. In such environments, journalists often carry several roles at once. Future tools and systems must therefore be designed for these realities: lightweight, reliable, affordable, flexible, and compatible with the actual conditions of online media.",
        "Journalism today is not separate from society or business. Media outlets, public relations teams, organizations, companies, researchers, and audiences are all part of a single information ecosystem. The future of newsrooms needs tools and processes that make this complex relationship more transparent, healthier, and more trustworthy.",
        "We believe the future of media depends not only on the quality of content, but also on the quality of the experience of the people who create it. If journalists have better tools, if processes are designed more humanely, and if technology serves focus, accuracy, and quality, journalism can serve society more calmly, deeply, and responsibly.",
      ],
      principlesTitle: "Principles of Journalist Experience",
      principles: [
        ["A journalist’s focus matters more than tool complexity.", "Tools should protect attention instead of scattering it across unnecessary steps, screens, and decisions."],
        ["Human narrative matters more than mass content production.", "The newsroom’s systems should help people explain meaning, context, and consequence—not merely increase output volume."],
        ["Human-AI collaboration matters more than replacing people with technology.", "AI should strengthen editorial judgment, reduce repetitive labor, and keep responsibility visible."],
        ["Reducing information chaos matters more than adding more features.", "Better JX favors clarity, prioritization, and usable signals over endless capabilities."],
        ["Calmer newsrooms produce more accurate media.", "Sustainable rhythms and coherent workflows are editorial infrastructure, not workplace luxuries."],
        ["Publishing speed must not replace accuracy and trust.", "Fast publication is valuable only when verification, context, and accountability remain intact."],
        ["Media tools must fit the realities of online newsrooms, not old patterns.", "Systems should be lightweight, flexible, reliable, and designed for today’s connected editorial work."],
        ["Social networks are part of journalism’s environment, not just distribution channels.", "Discovery, reaction, crisis, and audience understanding now happen inside networked spaces."],
        ["Journalist Experience directly affects journalistic quality.", "The conditions of work shape concentration, judgment, accuracy, and the final story the public receives."],
        ["The future of media depends on the relationship between people, technology, and information flows.", "Technology alone will not determine journalism’s future; the quality of this relationship will."],
      ],
      valuesTitle: "We value",
      values: [
        ["Focus and clarity", "over", "feature accumulation"],
        ["Human and technological collaboration", "over", "aimless automation"],
        ["Smooth information flow", "over", "complex and exhausting processes"],
        ["Trust and accuracy", "over", "uncontrolled speed"],
        ["Tools adapted to newsroom reality", "over", "heavy and inflexible systems"],
      ],
      invitationTitle: "Invitation",
      invitation: [
        "This manifesto is an attempt to begin a serious conversation among journalists, editors, professional associations, researchers, product designers, developers, and media practitioners about a future in which Journalist Experience matters as much as the news itself.",
        "Because the future of journalism will not be determined by technology alone; it will be shaped by the quality of the relationship between people, technology, and the flow of information.",
      ],
      closing: ["Journalist Experience (JX)", "A better experience for journalists,", "a better future for journalism."],
    },
    about: {
      title: "About JX",
      body: [
        "Journalist Experience is a lens for improving the human and operational systems around journalism: editorial workflows, publishing tools, verification routines, social listening, collaboration, analytics, automation, and AI assistance.",
        "It matters because the public sees the final story, but journalists work inside the machinery that makes the story possible. When that machinery is fragmented, opaque, rushed, or hostile to focus, quality suffers.",
        "JXManifesto.org is an open, versioned manifesto. It is meant to evolve through discussion, translation, and public revision.",
      ],
    },
    contribute: {
      title: "Contribute",
      body: [
        "Suggest edits through GitHub issues, pull requests, translations, or discussions.",
        "A pull request is best for precise wording changes. An issue is best for questions, missing principles, or larger proposals.",
        "The manifesto is versioned so readers can see how ideas change over time.",
      ],
      cta: "Open the repository",
    },
    licensePage: {
      title: "License",
      body: [
        "The manifesto text is available under CC BY 4.0. You may share and adapt it, including for commercial purposes, if you give appropriate attribution.",
        "Attribution is required. Please name JX Manifesto and link back to the project or license where practical.",
      ],
      link: "Official CC BY 4.0 license",
    },
  },
  fa: {
    dir: "rtl",
    langName: "فارسی",
    updated: "۴ تیر ۱۴۰۵",
    nav: {
      manifesto: "منشور",
      principles: "اصول",
      about: "درباره",
      contribute: "مشارکت",
      license: "مجوز",
    },
    home: {
      eyebrow: "روایتی برای آینده تحریریه‌های دیجیتال",
      title: "منشور تجربه خبرنگار",
      intro:
        "تجربه خبرنگار، کیفیت تجربه انسانی، ذهنی و عملیاتی خبرنگار در فرایند پیدا کردن، راستی‌آزمایی، تولید، انتشار و تحلیل خبر است.",
      primary: "خواندن منشور",
      secondary: "مشارکت در گیت‌هاب",
    },
    manifesto: {
      title: "منشور تجربه خبرنگار",
      subtitle: "Journalist Experience (JX)؛ روایتی برای آینده تحریریه‌های دیجیتال.",
      quote: "تجربه بهتر برای خبرنگار، آینده بهتر برای روزنامه‌نگاری.",
      license:
        "متن این منشور با مجوز Creative Commons Attribution 4.0 International / CC BY 4.0 منتشر می‌شود.",
      version: "نسخه اولیه — ۱۴۰۵ 🚀",
      intro: [
        "روزنامه‌نگاری در سال‌های اخیر بیش از هر زمان دیگری تغییر کرده است. تحریریه‌های امروز دیگر فقط محل تولید خبر نیستند؛ آن‌ها به شبکه‌هایی زنده، دائماً متصل و پیچیده تبدیل شده‌اند که در آن خبرنگار باید همزمان خبر را پیدا کند، صحت آن را بررسی کند، روایت بنویسد، تصویر و ویدیو انتخاب کند، برای وب و شبکه‌های اجتماعی آماده‌سازی انجام دهد، بازخورد مخاطبان را دنبال کند و در بسیاری از مواقع با ابزارهای هوش مصنوعی نیز همکاری داشته باشد.",
        "با وجود این تغییرات عمیق، بخش بزرگی از ابزارها و سامانه‌هایی که امروز در رسانه‌ها استفاده می‌شوند همچنان بر اساس الگوهای قدیمی طراحی شده‌اند؛ الگوهایی که متعلق به دوران دیگری از روزنامه‌نگاری بوده‌اند. در بسیاری از تحریریه‌ها، خبرنگار ناچار است میان ده‌ها سامانه، پیام‌رسان، شبکه اجتماعی و ابزار پراکنده جابه‌جا شود. بخش مهمی از انرژی ذهنی او نه صرف روایت‌گری و تحلیل، بلکه صرف مدیریت آشفتگی اطلاعات، فرایندهای پیچیده و اصطکاک‌های فنی می‌شود.",
        "ما باور داریم زمان آن رسیده است که «تجربه خبرنگار» به‌عنوان یکی از مسائل بنیادین آینده رسانه‌ها شناخته شود.",
        "«تجربه خبرنگار» یا Journalist Experience مفهومی است که به کیفیت تجربه انسانی، ذهنی و عملیاتی خبرنگار در فرایند تولید، ویرایش، انتشار و تحلیل محتوا می‌پردازد. این مفهوم صرفاً درباره طراحی رابط کاربری یا ساخت نرم‌افزارهای زیباتر نیست. مسئله اصلی، کیفیت کار و زیستن خبرنگار در محیط رسانه‌ای امروز است؛ محیطی که سرعت، فشار اطلاعات، چندوظیفگی و ارتباط دائمی به بخشی جدایی‌ناپذیر از آن تبدیل شده‌اند.",
        "تحریریه مدرن دیگر فقط یک دفتر خبر نیست؛ بلکه یک سیستم زنده است که در آن انسان، فناوری، شبکه‌های اجتماعی، منابع خبری، روابط عمومی‌ها، هوش مصنوعی و مخاطبان، به‌صورت مداوم بر یکدیگر اثر می‌گذارند. در چنین شرایطی، هر تصمیم طراحی می‌تواند مستقیماً بر کیفیت روزنامه‌نگاری اثر بگذارد. هر کلیک اضافی، هر فرایند مبهم، هر تأخیر در سامانه و هر آشفتگی اطلاعاتی، در نهایت بر تمرکز، دقت و کیفیت روایت خبرنگار تأثیر می‌گذارد.",
        "شبکه‌های اجتماعی نیز دیگر صرفاً کانال انتشار خبر نیستند. بخش مهمی از روزنامه‌نگاری امروز در همان فضا شکل می‌گیرد. خبرها در پیام‌رسان‌ها و شبکه‌های اجتماعی دیده می‌شوند، واکنش‌ها در همان‌جا شکل می‌گیرد و بسیاری از بحران‌ها پیش از ورود به تحریریه در فضای آنلاین آغاز می‌شوند. تحریریه‌های آینده باید بر اساس واقعیت رسانه‌های شبکه‌محور طراحی شوند، نه بر اساس الگوهای رسانه‌های چاپی گذشته.",
        "در این میان، هوش مصنوعی نیز واقعیتی انکارناپذیر است. با این حال، ما باور داریم نقش هوش مصنوعی در تحریریه نباید جایگزینی انسان باشد. آینده روزنامه‌نگاری در حذف خبرنگار نیست، بلکه در همکاری مؤثر میان انسان و فناوری است. هوش مصنوعی زمانی ارزشمند خواهد بود که بتواند از بار ذهنی خبرنگار بکاهد، فرایندها را روان‌تر کند، خطاها را هشدار دهد و به انسان کمک کند تصمیم‌های دقیق‌تر و آگاهانه‌تری بگیرد.",
        "«تجربه خبرنگار» فقط یک موضوع فناورانه نیست. این مفهوم به سلامت حرفه‌ای و ذهنی خبرنگاران نیز مربوط می‌شود. فرسودگی شغلی، آشفتگی ذهنی، کاهش تمرکز و فشار دائمی انتشار، بخشی از واقعیت امروز بسیاری از تحریریه‌هاست. رسانه‌ای که نتواند محیط کاری سالم‌تر، آرام‌تر و منسجم‌تری برای خبرنگاران خود ایجاد کند، در بلندمدت نه‌تنها کیفیت محتوای خود را از دست می‌دهد، بلکه سرمایه انسانی و اعتماد عمومی را نیز فرسوده می‌کند.",
        "واقعیت رسانه‌های ایران و منطقه نیز اهمیت این مسئله را دوچندان می‌کند. بسیاری از تحریریه‌ها با محدودیت منابع، تیم‌های کوچک، زیرساخت‌های ناپایدار و فشار دائمی سرعت مواجه‌اند. خبرنگار در چنین فضایی معمولاً ناچار است همزمان چند نقش مختلف را بر عهده بگیرد. بنابراین ابزارها و سامانه‌های آینده باید متناسب با این واقعیت‌ها طراحی شوند؛ سبک، قابل اعتماد، کم‌هزینه، انعطاف‌پذیر و سازگار با شرایط واقعی رسانه‌های آنلاین.",
        "از سوی دیگر، روزنامه‌نگاری امروز فرایندی جدا از جامعه و کسب‌وکارها نیست. رسانه‌ها، روابط عمومی‌ها، سازمان‌ها، شرکت‌ها، پژوهشگران و مخاطبان، همگی بخشی از یک اکوسیستم واحد اطلاعاتی‌اند. آینده تحریریه‌ها نیازمند ابزارها و فرایندهایی است که بتوانند این ارتباط پیچیده را شفاف‌تر، سالم‌تر و قابل اعتمادتر کنند.",
        "ما باور داریم آینده رسانه‌ها فقط به کیفیت محتوا وابسته نیست؛ بلکه به کیفیت تجربه انسان‌هایی وابسته است که آن محتوا را تولید می‌کنند. اگر خبرنگاران ابزارهای بهتری داشته باشند، اگر فرایندها انسانی‌تر طراحی شوند و اگر فناوری در خدمت تمرکز، دقت و کیفیت قرار گیرد، روزنامه‌نگاری نیز می‌تواند آرام‌تر، عمیق‌تر و مسئولانه‌تر به جامعه خدمت کند.",
      ],
      principlesTitle: "اصول تجربه خبرنگار",
      principles: [
        ["تمرکز خبرنگار مهم‌تر از پیچیدگی ابزارهاست.", "ابزارها باید توجه خبرنگار را حفظ کنند، نه اینکه آن را میان گام‌ها، صفحه‌ها و تصمیم‌های غیرضروری پراکنده کنند."],
        ["روایت انسانی مهم‌تر از تولید انبوه محتواست.", "سامانه‌های تحریریه باید به انسان برای توضیح معنا، زمینه و پیامد کمک کنند، نه فقط حجم خروجی را بالا ببرند."],
        ["همکاری انسان و هوش مصنوعی مهم‌تر از جایگزینی انسان با فناوری است.", "هوش مصنوعی باید قضاوت تحریریه را تقویت کند، کار تکراری را کاهش دهد و مسئولیت انسانی را قابل مشاهده نگه دارد."],
        ["کاهش آشفتگی اطلاعات مهم‌تر از افزودن قابلیت‌های بیشتر است.", "تجربه خبرنگار خوب، شفافیت، اولویت‌بندی و نشانه‌های قابل استفاده را بر قابلیت‌های بی‌پایان ترجیح می‌دهد."],
        ["تحریریه‌های آرام، رسانه‌های دقیق‌تری می‌سازند.", "ریتم پایدار و گردش‌کار منسجم، زیرساخت تحریریه‌ای است؛ نه امتیازی لوکس برای محیط کار."],
        ["سرعت انتشار نباید جایگزین دقت و اعتماد شود.", "انتشار سریع زمانی ارزشمند است که راستی‌آزمایی، زمینه و پاسخ‌گویی همچنان حفظ شوند."],
        ["ابزارهای رسانه باید با واقعیت تحریریه‌های آنلاین سازگار باشند، نه با الگوهای قدیمی.", "سامانه‌ها باید سبک، انعطاف‌پذیر، قابل اعتماد و متناسب با کار تحریریه‌ای متصل امروز طراحی شوند."],
        ["شبکه‌های اجتماعی بخشی از محیط روزنامه‌نگاری‌اند، نه فقط کانال توزیع محتوا.", "کشف خبر، واکنش مخاطب، بحران و فهم جامعه اکنون در فضاهای شبکه‌محور نیز شکل می‌گیرند."],
        ["تجربه خبرنگار مستقیماً بر کیفیت روزنامه‌نگاری اثر می‌گذارد.", "شرایط کار، تمرکز، قضاوت، دقت و در نهایت روایتی را که جامعه دریافت می‌کند شکل می‌دهد."],
        ["آینده رسانه‌ها فقط به فناوری وابسته نیست، بلکه به کیفیت رابطه انسان، فناوری و جریان اطلاعات وابسته است.", "فناوری به‌تنهایی آینده روزنامه‌نگاری را تعیین نمی‌کند؛ کیفیت این رابطه است که سرنوشت تحریریه‌ها را می‌سازد."],
      ],
      valuesTitle: "ما ارزش قائلیم به",
      values: [
        ["تمرکز و شفافیت", "بیش از", "انباشت قابلیت‌ها"],
        ["همکاری انسان و فناوری", "بیش از", "اتوماتیک‌سازی بی‌هدف"],
        ["جریان روان اطلاعات", "بیش از", "فرایندهای پیچیده و فرساینده"],
        ["اعتماد و دقت", "بیش از", "سرعت بدون کنترل"],
        ["ابزارهای سازگار با واقعیت تحریریه", "بیش از", "سامانه‌های سنگین و غیرمنعطف"],
      ],
      invitationTitle: "دعوت",
      invitation: [
        "این منشور تلاشی است برای آغاز یک گفت‌وگوی جدی میان خبرنگاران، سردبیران، انجمن‌های صنفی، پژوهشگران، طراحان محصول، توسعه‌دهندگان و فعالان رسانه‌ای؛ گفت‌وگویی درباره آینده‌ای که در آن «تجربه خبرنگار» به اندازه خود خبر اهمیت داشته باشد.",
        "زیرا آینده روزنامه‌نگاری را فقط فناوری تعیین نمی‌کند؛ بلکه کیفیت رابطه میان انسان، فناوری و جریان اطلاعات است که سرنوشت تحریریه‌های آینده را خواهد ساخت.",
      ],
      closing: ["Journalist Experience (JX)", "تجربه بهتر برای خبرنگار،", "آینده بهتر برای روزنامه‌نگاری."],
    },
    about: {
      title: "دربارهٔ JX",
      body: [
        "تجربه خبرنگار لنزی برای بهتر کردن سامانه‌های انسانی و عملیاتی پیرامون روزنامه‌نگاری است: گردش‌کار تحریریه، ابزار انتشار، روال‌های راستی‌آزمایی، رصد شبکه‌های اجتماعی، همکاری، سنجه‌ها، اتوماسیون و همراهی هوش مصنوعی.",
        "این موضوع مهم است چون مخاطب محصول نهایی را می‌بیند، اما خبرنگار درون سازوکاری کار و زندگی می‌کند که آن محصول را ممکن می‌کند. اگر این سازوکار پراکنده، مبهم، شتاب‌زده یا ضدتمرکز باشد، کیفیت آسیب می‌بیند.",
        "JXManifesto.org منشوری باز و نسخه‌مند است و باید با گفت‌وگو، ترجمه و بازنگری عمومی تکامل پیدا کند.",
      ],
    },
    contribute: {
      title: "مشارکت",
      body: [
        "پیشنهادهای خود را از راه issue، pull request، ترجمه یا گفت‌وگو در گیت‌هاب مطرح کنید.",
        "Pull request برای تغییرهای دقیق در متن مناسب است. Issue برای پرسش، اصل‌های جاافتاده یا پیشنهادهای بزرگ‌تر بهتر است.",
        "منشور نسخه‌مند است تا خوانندگان بتوانند تغییر ایده‌ها را در طول زمان ببینند.",
      ],
      cta: "باز کردن مخزن",
    },
    licensePage: {
      title: "مجوز",
      body: [
        "متن منشور با مجوز CC BY 4.0 منتشر می‌شود. می‌توانید آن را بازنشر یا اقتباس کنید، حتی برای استفادهٔ تجاری، به شرط آنکه انتساب مناسب بدهید.",
        "انتساب الزامی است. در صورت امکان نام JX Manifesto و پیوند پروژه یا مجوز را ذکر کنید.",
      ],
      link: "صفحهٔ رسمی مجوز CC BY 4.0",
    },
  },
} as const;

export const principles = (locale: Locale) =>
  content[locale].manifesto.principles.map(([title, summary], index) => ({
    number: index + 1,
    title,
    summary,
  }));
export const alternateLocale = (locale: Locale): Locale =>
  locale === "en" ? "fa" : "en";
