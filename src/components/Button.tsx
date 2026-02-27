import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500/40",
  accent:
    "bg-accent-300 text-primary-950 hover:bg-accent-400 focus-visible:ring-accent-300/40",
  outline:
    "border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-gray-300/40 dark:border-dark-border dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-dark-card",
  ghost:
    "text-white/80 border border-white/20 hover:bg-white/10 hover:text-white focus-visible:ring-white/20",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-out hover:scale-[1.03] hover:-translate-y-px active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
