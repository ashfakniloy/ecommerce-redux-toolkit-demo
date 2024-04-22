import { cn } from "@/lib/utils";

export function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="36"
      fill="none"
      viewBox="0 0 20 36"
      className={cn(className)}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.75 34.5L18.25 18 1.75 1.5"
      ></path>
    </svg>
  );
}
