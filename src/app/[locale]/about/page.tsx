import { notFound } from "next/navigation";
import { content, isLocale } from "@/content/site";
export default async function About({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); const p = content[locale].about; return <section className="max-w-3xl py-16"><h1 className="text-5xl font-semibold">{p.title}</h1>{p.body.map((text) => <p key={text} className="mt-6 text-lg leading-9 text-muted">{text}</p>)}</section>; }
