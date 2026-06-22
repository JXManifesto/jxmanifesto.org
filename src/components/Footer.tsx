import Link from "next/link";
import { githubUrl, Locale } from "@/content/site";
export function Footer({ locale }: { locale: Locale }) { return <footer className="mt-20 border-t border-line"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between"><p>© 2026 JX Manifesto — CC BY 4.0</p><nav className="flex gap-4"><Link href={`/${locale}/manifesto/`}>Manifesto</Link><a href={githubUrl}>GitHub</a><Link href={`/${locale}/license/`}>License</Link></nav></div></footer>; }
