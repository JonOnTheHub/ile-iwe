import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variantStyles = {
    primary:
        "inline-flex items-center gap-1.5 rounded-lg bg-purple-vivid px-4 py-2 text-sm font-semibold font-syne text-white transition-colors hover:bg-purple-bright",
    secondary:
        "inline-flex items-center gap-1.5 rounded-lg border border-bg-border bg-bg-surface px-4 py-2 text-sm font-semibold font-syne text-text-primary transition-colors hover:border-purple-border",
    ghost:
        "inline-flex items-center gap-1.5 rounded-lg border border-bg-border/60 bg-bg-raised/30 px-4 py-2 text-sm font-semibold font-syne text-text-secondary backdrop-blur-sm transition-all hover:border-purple-border/50 hover:bg-bg-raised/60 hover:text-text-primary",
    destructive:
        "inline-flex items-center gap-1.5 rounded-lg bg-error px-4 py-2 text-sm font-semibold font-syne text-white transition-opacity hover:opacity-80",
};

export default function Button({
    href,
    children,
    variant = "primary",
    withIcon = false,
    onClick,
    type = "button",
    className = "",
}) {
    const classes = `${variantStyles[variant] ?? variantStyles.primary} ${className}`;

    const content = (
        <>
            {children}
            {withIcon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </>
    );

    if (href) {
        return <Link href={href} className={classes}>{content}</Link>;
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    );
}