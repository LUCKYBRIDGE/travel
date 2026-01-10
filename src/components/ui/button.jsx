import { cn } from "../../lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90",
  outline: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-100",
  ghost: "text-slate-600 hover:bg-slate-100",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200"
};

const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-11 px-6 text-base"
};

export function Button({
  className,
  variant = "default",
  size = "default",
  as,
  ...props
}) {
  const Comp = as || (props.href ? "a" : "button");
  return (
    <Comp
      className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      {...props}
    />
  );
}
