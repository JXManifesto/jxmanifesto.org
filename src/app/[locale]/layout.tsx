import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { content, Locale, locales } from "@/content/site";

function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={content[locale].dir} className="min-h-screen">
      <Header locale={locale} />
      <main className="mx-auto max-w-6xl px-5">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
