import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { content, Locale } from "@/content/site";
import { generateLocaleStaticParams } from "@/lib/static-params";

export const generateStaticParams = generateLocaleStaticParams;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fa" ? "خانه" : "Home",
    description: content[locale].home.intro,
    alternates: { canonical: `/${locale}/` },
  };
}
export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold">JX: Journalist Experience</h2>
          <p className="mt-4 text-lg leading-9 text-muted">
            {content[locale].home.intro}
          </p>
        </div>
        <div className="rounded-3xl border border-line p-6 text-muted">
          Version 0.1
          <br />
          {content[locale].updated}
          <br />
          CC BY 4.0
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
