import Link from "next/link";
import { Locale } from "@/content/site";
export function CTASection({ locale }: { locale: Locale }) { return <section className="mt-16 rounded-[2rem] bg-ink p-8 text-paper md:p-10"><h2 className="text-3xl font-semibold">JX is open to revision.</h2><p className="mt-3 max-w-2xl text-paper/75">Improve the manifesto with issues, pull requests, translations, and public discussion.</p><Link className="mt-6 inline-block rounded-full bg-paper px-5 py-3 font-semibold text-ink" href={`/${locale}/contribute/`}>Contribute</Link></section>; }
