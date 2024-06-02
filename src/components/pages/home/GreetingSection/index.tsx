"use client";

import { useTranslations } from "next-intl";
import { NextImage, NextLink } from "@src/components/common";
import GreetingImage from "@public/images/pages/home/greeting.svg";
import Typical from 'react-typical';

export default function GreetingSection() {
    const t = useTranslations("Home.GreetingSection");
    const titles = [
        t("title"),
        t("locate"),
        t("softwareDeveloper")
    ];

    return (
        <section className="section-height flex items-center bg-primary-400 bg-noise">
            <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
                <div className="grid cursor-default gap-4">
                    <span className="text-primary-200">{t("greeting")}</span>
                    <h1 className="text-4xl font-bold md:text-6xl">
                        {t("name")}
                    </h1>
                    <p className="text-xl italic md:text-2xl">
                        <Typical
                            steps={[titles[0], 3000, titles[1], 3000, titles[2], 3000]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </p>
                    <p className="font-semibold">{t("paragraph-one")}</p>
                    <p className="font-semibold">{t("paragraph-two")}</p>
                </div>
                <NextImage src={GreetingImage} priority alt="" />
            </div>
        </section>
    );
}
