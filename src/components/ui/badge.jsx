import { cn } from "../../lib/utils";

const variants = {
  default: "bg-slate-100 text-slate-700",
  info: "bg-blue-50 text-blue-700",
  accent: "bg-emerald-50 text-emerald-700"
};

export function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  );
}
