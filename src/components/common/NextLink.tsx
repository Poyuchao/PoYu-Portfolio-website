import type { HTMLProps, ReactNode } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type NextLinkProps = LinkProps & Omit<HTMLProps<HTMLAnchorElement>, "ref"> & {
    children: ReactNode;
};

export default function NextLink({ href, children, ...rest }: NextLinkProps) {
    return (
        <Link href={href} {...rest} legacyBehavior>
            <a {...rest}>{children}</a>
        </Link>
    );
}
