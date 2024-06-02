"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import AboutMeImage from "@public/images/common/me.jpg";

export default function AboutSection() {
    const t = useTranslations("Home.AboutSection");
    // Declare and assign a value to the 'link' variable

    const keywords = ["敏捷開發","全端開發人員","加拿大不列顛哥倫比亞省溫哥華","agile","jira","Vancouver","full-stack developer","HTML","CSS","JavaScript", "React","Reactjs", "PHP", "MySQL", "RESTful-APIs", "CRUD","Next.js","TypeScript","AwsS3","TailwindCSS"];

    function highlightText(text: string): React.ReactNode {
        const regex = new RegExp(`##(${keywords.join('|')})##`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) => {
            if (keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase())) {
                return (
                    <span key={`highlight-${index}`} className="font-bold text-primary-100">
                        {part}
                    </span>
                );
            }
            return part;
        });
    }
  
    return (
        <section
            className="section-height flex items-center bg-primary-500"
            id="about"
        >
            <div className="container grid cursor-default place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
                <NextImage src={AboutMeImage} alt="" />
                <div className="grid gap-4 font-semibold text-white">
                    <h2 className="text-3xl font-bold text-primary-100 md:text-6xl">
                        {t("title")}
                    </h2>
                    <p>{highlightText(t("paragraph-one"))}</p>
                    <p>{highlightText(t("paragraph-two"))}</p>
                    <p>{highlightText(t("paragraph-three"))}</p>
                </div>
            </div>
        </section>
    );
}
