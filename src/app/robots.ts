import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { generateLocaleStaticParams } from "@/lib/static-params";

export const generateStaticParams = generateLocaleStaticParams;
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
