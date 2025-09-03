"use client";

import { useRouter, usePathname } from "next/navigation";
import { Label, Switch } from "@src/components/ui";
import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon,InstagramIcon} from "@src/icons";
import { useTranslations } from "next-intl";
import { SparklesCore } from "../../components/ui/sparkles";


export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Navigation");
    return  (
        <footer className="relative h-footer flex items-center text-white overflow-hidden bg-primary-700 bg-noise">
            <SparklesCore
                id="footer-sparkles"
     
                className="absolute inset-0 z-0 pointer-events-none"
            />
            <div className="relative container flex items-center justify-between text-sm z-10">
                <div className="flex items-center gap-2.5">
                    <NextLink
                        href="https://github.com/Poyuchao"
                        title="Github"
                    >
                        <GithubIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                    <NextLink
                        href="https://www.linkedin.com/in/poyu-chao/"
                        title="Linkedin"
                    >
                        <LinkedinIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                    <NextLink
                        href="https://www.instagram.com/killyen444/"
                        title="Instagram"
                    >
                        <InstagramIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                </div>
                <p className="hidden sm:inline-block">
                    Made with ❤️ © {new Date().getFullYear()}
                </p>

                <div className="group inline-block">
                    <NextLink
                        className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300] text-black animate-pulse"
                        href={
                            pathname === "/"
                                ? "/static/Po-Resume-2025-0804.pdf"
                                : "/static/Po-Resume-2025-Mandarin-0804.pdf"
                        }
                        target="_blank"
                        prefetch={false}
                    >
                        {t("resume")}
                    </NextLink>
                </div>
               
            </div>
        </footer>
    );
}
