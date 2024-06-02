"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { NextImage, NextLink } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";
import { Label, Switch } from "@src/components/ui";
const navigationLinks = ["about", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const t = useTranslations("Navigation");

    useEffect(() => {
        if (window.location.hash) {
            setActiveLink(window.location.hash.slice(1));
            const section = document.querySelector(window.location.hash);
            section?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <nav className="h-header sticky top-0 z-50 flex items-center border-b-2 border-primary-100 bg-primary-300">
            <div className="container flex items-center justify-between">
                <NextLink
                    className="rounded-full bg-primary-100 p-1"
                    href="#"
                    title=""
                    onClick={() => setActiveLink("")}
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        priority
                        alt="Site Logo"
                    />
                </NextLink>

                <ul className="hidden items-center justify-between gap-2 font-medium text-white xs:flex sm:gap-6">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <NextLink
                                href={`#${navigationLink}`}
                                onClick={() => setActiveLink(navigationLink)}
                                className={cn(
                                    "py-1 decoration-2 underline-offset-8",
                                    activeLink === navigationLink
                                        ? "text-primary-100 underline"
                                        : "transition hover:text-primary-100 hover:underline"
                                )}
                            >
                                {t(navigationLink)}
                            </NextLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-2 font-semibold text-white">
                    <Label htmlFor="lang" className="text-white">中</Label>
                    <Switch
                        id="lang"
                        aria-label="Locale Switcher"
                        className="border-white bg-primary-100 [&>span]:bg-primary-300"
                        defaultChecked={pathname !== "/tr"}
                        onCheckedChange={checkedValue => {
                            router.push(checkedValue ? "/" : "/tr");
                        }}
                    />
                    <Label htmlFor="lang" className="text-white">EN</Label>
                </div>


            
            </div>
        </nav>
    );
}
