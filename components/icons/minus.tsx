import { cn } from "@/lib/utils";

export function Minus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={cn(className)}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14"></path>
    </svg>
  );
}
