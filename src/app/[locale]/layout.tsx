import "../globals.css";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { Locale } from "@src/types";
import { loadTranslations, nunitoFont } from "src/utils";
import { LocaleDetector } from "@src/components/common";
import Navbar from "@src/layouts/Navbar";
import Footer from "@src/layouts/Footer";
import siteConfig from "site.config";

export function generateStaticParams(): { locale: Locale }[] {
    return siteConfig.locales.map(locale => ({ locale }));
}

type RootLayoutProps = {
    children: ReactNode;
    params: { locale: Locale };
};

export default async function RootLayout({
    children,
    params: { locale }
}: RootLayoutProps) {
    setRequestLocale(locale);
    const messages = await loadTranslations(locale);

    return (
        <html className={nunitoFont.className} lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <LocaleDetector />
                </NextIntlClientProvider>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}

const BASE_URL = "https://poyuChao.dev";

// Extend the Languages type to include 'cn'
type CustomLanguages = {
    "x-default": string;
    en: string;
    cn: string; // Add 'cn' property here
  };
  
  // Extend the Metadata type to include your custom languages type
interface CustomMetadata extends Metadata {
alternates: {
    languages: CustomLanguages;
    canonical: string;
};
}

export async function generateMetadata({
    params: { locale }
}: Pick<RootLayoutProps, "params">): Promise<CustomMetadata> {
    const messages = await loadTranslations(locale);

    const t = createTranslator({ locale, messages });

    return {
        metadataBase: new URL(BASE_URL),
        title: {
            default: "Portfolio | Po Yu Chao", // Update the default title here
            template: "%s | Portfolio | Po Yu Chao" // Update the template title here
        },
        description: t("default-seo-description"),
        icons: {
            shortcut: "/favicon.ico",
            apple: "static/apple-icon.png",
            other: [
                {
                    url: "static/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png"
                },
                {
                    url: "static/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png"
                }
            ]
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1
            }
        },
        alternates: {
            languages: {
                "x-default": BASE_URL,
                en: `${BASE_URL}/en`,
                cn: `${BASE_URL}/cn`
            },
            canonical: BASE_URL
        },
        verification: {
            google: "UJthXaWw4SK7do_wKDjzQXss3tPHWfF0dXCBjfQrZek"
        },
        twitter: {
            card: "summary_large_image",
            creator: "@serdarrgokhann"
        },
        openGraph: {
            title: "Portfolio | Po Yu Chao", // Update the Open Graph title here
            description: t("default-seo-description"),
            url: `${BASE_URL}/${locale}`,
            siteName: "Portfolio | Po Yu Chao", // Update the Open Graph site name here
            locale,
            type: "website"
        }
    };
}