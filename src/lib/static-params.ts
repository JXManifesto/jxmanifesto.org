import { locales } from "@/content/site";

export function generateLocaleStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}