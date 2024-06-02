"use client";

import { useRouter, usePathname } from "next/navigation";
import { Label, Switch } from "@src/components/ui";
import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon,InstagramIcon} from "@src/icons";
import { useTranslations } from "next-intl";
export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Navigation");
    return (
        <footer className="h-footer flex cursor-default items-center bg-primary-300 text-white">
            <div className="container flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                    <NextLink
                        href="https://github.com/serdargokhan"
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
                        href="https://twitter.com/serdarrgokhann"
                        title="Twitter"
                    >
                        <InstagramIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                </div>
                <p className="hidden sm:inline-block">
                    Made with ❤️ © {new Date().getFullYear()}
                </p>

                <div className="group inline-block">
                    <NextLink
                        className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300] text-black"
                        href={
                            pathname === "/tr"
                                ? "/static/Po-Resume-2024-latest-version.pdf"
                                : "/static/Po-Resume-2024-latest-version.pdf"
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
