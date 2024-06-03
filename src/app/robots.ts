import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*"
        },
        sitemap: "https://poyuChao.dev/sitemap.xml",
        host: "https://poyuChao.dev"
    };
}
