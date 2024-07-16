"use client";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import TextRotator from 'react-text-rotator';
import {SparklesCore} from "../../../ui/sparkles";
import { ScrollTriggerTextEffect } from "../../../ui/ScrollTriggerTextEffect";
import { NextLink } from "@src/components/common";

export default function GreetingSection() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Home.GreetingSection");
    const titles = [
        { text: t("title"), className: "text-primary-400" },
        { text: t("locate"), className: "text-primary-400" },
        { text: t("softwareDeveloper"), className: "text-primary-400" },
    ];

    return (
        <section className="relative section-height flex items-center bg-primary-700 bg-noise">
            <SparklesCore
                id="greeting-sparkles"
                className="absolute inset-0 z-0 pointer-events-none"
            />
            <div className="relative container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20 z-10">
                <div className="grid cursor-default gap-4">
                    <span className="text-primary-400 text-base">{t("greeting")}</span>

                    <ScrollTriggerTextEffect
                        words={t("name")}
                        className="text-4xl font-bold md:text-6xl text-primary-400"
                    />
                    <div className="text-xl italic md:text-2xl text-primary-400">
                        <TextRotator
                            content={titles}
                            time={3000}
                            startDelay={1000}
                        />
                    </div>
                    <p className="font-semibold text-primary-400 text-lg">{t("paragraph-one")}</p>
                    <p className="font-semibold text-primary-400 text-lg">{t("paragraph-two")}</p>
                    <div className="group inline-block">
                    <NextLink
                        className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300] text-black animate-pulse"
                        href={
                            pathname === "/"
                                ? "/static/Po-Resume-2024-0715.pdf"
                                : "/static/Po-Resume-2024-Mandarin.pdf"
                        }
                        target="_blank"
                        prefetch={false}
                    >
                        {t("resume")}
                    </NextLink>
                </div>
                </div>
                <img
                    src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHI1N3YxMTAwbWU3NXJiZDR2NHdkcjl3cm5vMWNqejVycmc0ZW1meiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LYBHgc2yiO07G3dkkQ/giphy.gif"
                    alt="Animated GIF"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </section>
    );
}