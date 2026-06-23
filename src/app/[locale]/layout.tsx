import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { content, Locale, locales } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return (
    <div lang={locale} dir={content[locale].dir} className="min-h-screen">
      <Header locale={locale} />
      <main className="mx-auto max-w-6xl px-5">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
