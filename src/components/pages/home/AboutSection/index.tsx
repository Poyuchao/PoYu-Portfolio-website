"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import AboutMeImage from "@public/images/common/me.jpg";
import {SparklesCore} from "../../../ui/sparkles";
import { ScrollTriggerTextEffect } from "../../../ui/ScrollTriggerTextEffect";
import { CardContainer, CardBody, CardItem }  from "../../../ui/3d-card";

export default function AboutSection() {
    const t = useTranslations("Home.AboutSection");
    // Declare and assign a value to the 'link' variable

    const keywords = ["Northern Arizona University","Frontend Developer","Full Stack Developer","artbridge","NewebPay","Next.js Middleware","Wonder AI","Phase Software","jira","Vancouver","full-stack developer","HTML","CSS","Tailwind CSS","Amazon S3","JavaScript", "React","React.js","Firestore", "MySQL", "RESTful-APIs", "CRUD","Next.js","TypeScript","AwsS3","TailwindCSS","Firebase","Firebase listener","Redux Toolkit","Redux","GCP Cloud Run","Docker","Jest","Django","Python"];

    function highlightText(text: string): React.ReactNode {
        // regex is a regular expression that is dynamically generated to match any of the keywords in the keywords array.
        // The join('|') method combines the keywords into a single string, separated by the pipe character |, which is the OR operator in regular expressions.
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
        
            <CardContainer className="w-full h-full ">
                <NextImage className="rounded-2xl" src={AboutMeImage} alt="me-Img" />
            </CardContainer>

       
            <div className="grid gap-4 font-semibold text-white">
                <ScrollTriggerTextEffect
                    words={t("title")}
                    className="text-3xl font-bold text-white md:text-6xl"
                />
                <p className="text-xl hightlight">{highlightText(t("paragraph-one"))}</p>
                <p className="text-xl">{highlightText(t("paragraph-two"))}</p>
                <p className="text-xl">{highlightText(t("paragraph-three"))}</p>
            </div>
      
        </div>
      
    </section>
    );
}
