"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { Category, projectItems } from "./projectItems";
import { categoryButtons } from "./categoryButtons";
import ProjectItem from "./ProjectItem";
import { ScrollTriggerTextEffect } from "../../../ui/ScrollTriggerTextEffect";
import {SparklesCore} from "../../../ui/sparkles";




export default function PortfolioSection() {
    const [category, setCategory] = useState<Category>("nextjs");

    const t = useTranslations("Home.PortfolioSection");

    return (
        <section className="relative section-height grid bg-primary-700 bg-noise" id="projects">
        <SparklesCore
            id="projects-sparkles"
            className="absolute inset-0 z-0 pointer-events-none"
        />
        <div className="relative container py-12 lg:py-20 z-10">

                <ScrollTriggerTextEffect
                    words={t("title")}
                    className="text-3xl font-bold text-white md:text-6xl"
                />
                <div className="my-10 flex flex-wrap justify-center gap-8">
                    {categoryButtons.map(categoryButton => (
                        <button
                            type="button"
                            key={categoryButton.id}
                            onClick={() => setCategory(categoryButton.id)}
                            className={cn(
                                "group relative flex items-center gap-1.5 border-b-[3px] border-transparent py-2 text-lg font-semibold text-primary-100 transition hover:text-white",
                                category === categoryButton.id &&
                                    "border-white text-white [&>svg]:fill-white"
                            )}
                        >
                            <categoryButton.icon className="h-6 w-6 fill-primary-100 transition group-hover:fill-white" />
                            <span>{categoryButton.title}</span>
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {projectItems[category].map(projectItem => (
                        <ProjectItem
                            key={projectItem.sourceLink}
                            title={projectItem.title}
                            websiteLink={projectItem.websiteLink}
                            videoLink={projectItem.videoLink}
                            sourceLink={projectItem.sourceLink}
                            description={t(
                                `projects.${category}.${projectItem.id}.description` as any
                            )}
                            techStacks={projectItem.techStacks}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
