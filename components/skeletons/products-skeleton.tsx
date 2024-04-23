import { Skeleton } from "../ui/skeleton";

export default function ProductsSkeleton() {
  const items = [...Array(6)];

  return (
    <div className="flex gap-[29px]">
      {items.map((_, i) => (
        <Skeleton key={i} className="w-[186px] h-[285px]" />
      ))}
    </div>
  );
}
