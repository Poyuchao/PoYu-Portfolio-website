"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import AboutMeImage from "@public/images/common/me.jpg";
import {SparklesCore} from "../../../ui/sparkles";
import { ScrollTriggerTextEffect } from "../../../ui/ScrollTriggerTextEffect";

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
        
        <section className="relative section-height flex items-center bg-primary-700 bg-noise overflow-hidden" id="about">
        <SparklesCore id="about-sparkles" className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative container grid cursor-default place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20 z-10 ">
            <NextImage src={AboutMeImage} alt="" />
            <div className="grid gap-4 font-semibold text-white">
                <ScrollTriggerTextEffect
                    words={t("title")}
                    className="text-3xl font-bold text-white md:text-6xl"
                />
                <p>{highlightText(t("paragraph-one"))}</p>
                <p>{highlightText(t("paragraph-two"))}</p>
                <p>{highlightText(t("paragraph-three"))}</p>
            </div>
        </div>
    </section>
    );
}
