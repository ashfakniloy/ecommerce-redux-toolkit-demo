import { Skeleton } from "../ui/skeleton";

export default function CategoriesSkeleton() {
  const items = [...Array(4)];

  return (
    <div className="ml-4">
      <div className="hidden lg:flex gap-[47px] py-2">
        {items.map((_, i) => (
          <Skeleton
            key={i}
            className="w-[272px] h-[200px] border border-white"
          />
        ))}
      </div>

      <div className="lg:hidden flex gap-[47px] py-2">
        <Skeleton className="w-[272px] h-[200px] border border-white" />
        <Skeleton className="w-[65px] h-[200px] border border-white" />
      </div>
    </div>
  );
}
