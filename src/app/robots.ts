import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://leadglobalconsults.com/sitemap.xml",
    host: "https://leadglobalconsults.com",
  };
}
