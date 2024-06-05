"use client";

import { useTranslations } from "next-intl";
import { NextImage, NextLink } from "@src/components/common";
import GreetingImage from "@public/images/pages/home/greeting.svg";
import TextRotator from 'react-text-rotator';
import {SparklesCore} from "../../../ui/sparkles";

export default function GreetingSection() {
    const t = useTranslations("Home.GreetingSection");
    const titles = [
        t("title"),
        t("locate"),
        t("softwareDeveloper")
    ];

    return (
        
        <section className="section-height flex items-center bg-primary-700 bg-noise">
           <SparklesCore
            id="greeting-sparkles"

            className="absolute inset-0 z-0 pointer-events-none"
        />
            <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20 z-10">
                <div className="grid cursor-default gap-4">
                    <span className="text-primary-400">{t("greeting")}</span>
                    <h1 className="text-4xl font-bold md:text-6xl text-primary-400">
                        {t("name")}
                    </h1>
                    <p className="text-xl italic md:text-2xl text-primary-400">
                        <TextRotator
                            content={titles.map(title => ({ text: title }))}
                            time={3000}
                            startDelay={1000}
                        />
                    </p>
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
