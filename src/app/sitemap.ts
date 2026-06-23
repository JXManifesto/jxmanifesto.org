import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/content/site";
export const dynamic = "force-static";
const pages = ["", "manifesto", "principles", "about", "contribute", "license"];
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}/${page}`.replace(/\/$/, "") + "/",
      lastModified: new Date("2026-06-22"),
    })),
  );
}
