"use client";

import { useTranslations } from "next-intl";
import TextRotator from 'react-text-rotator';
import {SparklesCore} from "../../../ui/sparkles";
import { ScrollTriggerTextEffect } from "../../../ui/ScrollTriggerTextEffect";


export default function GreetingSection() {
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
                    <span className="text-primary-400">{t("greeting")}</span>

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
                    <p className="font-semibold text-primary-400">{t("paragraph-one")}</p>
                    <p className="font-semibold text-primary-400">{t("paragraph-two")}</p>
                </div>
                <img
                    src="https://media1.giphy.com/media/bGgsc5mWoryfgKBx1u/200w.gif?cid=6c09b9523drvtiv4318dipmnfcd85jtnvtbdc5vu0pvtawlg&ep=v1_gifs_search&rid=200w.gif&ct=g"
                    alt="Animated GIF"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </section>
    );
}