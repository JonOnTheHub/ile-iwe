import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
    href,
    children,
    variant = "default",
    withIcon = true,
    className = "",
}) {
    const variantStyles = {
        default:
            "rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold font-syne text-primary-foreground transition-opacity hover:opacity-90",
        destructive:
            "rounded-lg bg-destructive px-6 py-2.5 text-sm font-semibold font-syne text-primary-foreground transition-opacity hover:opacity-80",
        ghost:
            "rounded-lg bg-transparent px-6 py-2.5 text-sm font-semibold font-syne text-foreground/90 hover:bg-background/50 transition",
        outline:
            "rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold font-syne text-primary-foreground hover:bg-primary/10 transition",
        noIcon:
            "rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold font-syne text-primary-foreground transition-opacity hover:opacity-90",
    };

    const baseClass = variantStyles[variant] || variantStyles.default;

    return (
        <Link href={href} className={`${baseClass} ${className}`}>
            {children}
            {withIcon && variant !== "noIcon" && (
                <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            )}
        </Link>
    );
}
