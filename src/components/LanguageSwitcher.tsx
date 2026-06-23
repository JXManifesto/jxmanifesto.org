import Link from "next/link";
import { alternateLocale, Locale } from "@/content/site";
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const other = alternateLocale(locale);
  return (
    <Link
      className="rounded-full border border-line px-4 py-2 text-sm font-medium hover:border-accent"
      href={`/${other}/`}
      hrefLang={other}
    >
      {other === "fa" ? "فارسی" : "English"}
    </Link>
  );
}
