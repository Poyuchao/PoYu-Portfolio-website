"use client";

import { useRouter, usePathname } from "next/navigation";
import { Label, Switch } from "@src/components/ui";
import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon,InstagramIcon} from "@src/icons";

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

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
                <div className="flex items-center space-x-2 font-semibold">
                    <Label htmlFor="lang">Chinese</Label>
                    <Switch
                        id="lang"
                        aria-label="Locale Switcher"
                        className="border-white bg-primary-100 [&>span]:bg-primary-300"
                        defaultChecked={pathname !== "/tr"}
                        onCheckedChange={checkedValue => {
                            router.push(checkedValue ? "/" : "/tr");
                        }}
                    />
                    <Label htmlFor="lang">English</Label>
                </div>
            </div>
        </footer>
    );
}
