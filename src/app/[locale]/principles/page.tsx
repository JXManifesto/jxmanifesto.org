import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PrincipleCard } from "@/components/PrincipleCard";
import { content, isLocale, principles } from "@/content/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) notFound(); return { title: content[locale].nav.principles, description: "Manifesto principles as readable cards." }; }
export default async function Principles({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <section className="py-16"><h1 className="text-5xl font-semibold">{content[locale].nav.principles}</h1><div className="mt-10 grid gap-5 md:grid-cols-2">{principles(locale).map((p) => <PrincipleCard key={p.number} {...p} />)}</div></section>; }
