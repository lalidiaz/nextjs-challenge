import { cn } from "@/lib/utils";

interface Props {
  onClick?: () => void;
  className: string;
  label: string;
  type?: "button" | "reset" | "submit" | undefined;
  ariaLabel?: string;
}

export default function Button({
  ariaLabel,
  type,
  onClick,
  className,
  label,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "rounded px-4 py-2 transition-colors text-sm font-semibold duration-200",
        className
      )}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}
