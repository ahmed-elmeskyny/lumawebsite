import Link from "next/link";
import { cn } from "@/lib/cn";

type CtaVariant = "yellow" | "outlineLight" | "dark" | "outlineDark";

interface CtaLinkProps {
  href: string;
  variant?: CtaVariant;
  children: React.ReactNode;
  className?: string;
}

const VARIANTS: Record<CtaVariant, string> = {
  /** Primary action on blue/dark fields */
  yellow: "bg-cyber-yellow text-onyx hover:bg-cyber-yellow/90",
  /** Secondary action on blue/dark fields */
  outlineLight:
    "border-2 border-luma-white/70 text-luma-white hover:bg-luma-white hover:text-onyx",
  /** Primary action on light fields */
  dark: "bg-onyx text-luma-white hover:bg-celtic-blue",
  /** Secondary action on light fields */
  outlineDark: "border-2 border-onyx text-onyx hover:bg-onyx hover:text-luma-white",
};

export function CtaLink({
  href,
  variant = "yellow",
  children,
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-13 items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
