import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ManifestoSection } from "@/components/ManifestoSection";
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
    title: content[locale].manifesto.title,
    description: content[locale].manifesto.subtitle,
  };
}
export default async function Manifesto({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const m = content[locale].manifesto;
  return (
    <article className="py-16">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">
        Version 0.1
      </p>
      <h1 className="mt-4 text-5xl font-semibold md:text-7xl">{m.title}</h1>
      <p className="mt-5 max-w-3xl text-xl leading-9 text-muted">
        {m.subtitle}
      </p>
      <blockquote className="my-10 border-s-4 border-accent ps-6 text-2xl font-serif leading-10">
        {m.quote}
      </blockquote>
      <p className="mb-10 text-sm text-muted">
        Last updated: {content[locale].updated}
      </p>
      {m.sections.map(([title, body], index) => (
        <ManifestoSection key={title} number={index + 1} title={title}>
          {body}
        </ManifestoSection>
      ))}
      <p className="mt-8 rounded-2xl border border-line p-5 text-muted">
        {m.license}
      </p>
      <CTASection locale={locale} />
    </article>
  );
}
