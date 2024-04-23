import { Skeleton } from "../ui/skeleton";

export default function ProductsSkeleton() {
  const items = [...Array(6)];

  return (
    <div className="">
      <div className="hidden lg:flex gap-[29px]">
        {items.map((_, i) => (
          <Skeleton key={i} className="w-[186px] h-[285px]" />
        ))}
      </div>

      <div className="lg:hidden flex gap-[29px]">
        <Skeleton className="w-[186px] h-[273px]" />
        <Skeleton className="w-[186px] h-[273px]" />
      </div>
    </div>
  );
}
