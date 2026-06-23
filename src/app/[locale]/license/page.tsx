import { content, Locale } from "@/content/site";
import { generateLocaleStaticParams } from "@/lib/static-params";

export const generateStaticParams = generateLocaleStaticParams;
export default async function License({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const p = content[locale].licensePage;
  return (
    <section className="max-w-3xl py-16">
      <h1 className="text-5xl font-semibold">{p.title}</h1>
      {p.body.map((text) => (
        <p key={text} className="mt-6 text-lg leading-9 text-muted">
          {text}
        </p>
      ))}
      <a
        className="mt-8 inline-block underline decoration-accent decoration-2 underline-offset-4"
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        {p.link}
      </a>
    </section>
  );
}
