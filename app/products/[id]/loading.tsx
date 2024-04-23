import { Skeleton } from "@/components/ui/skeleton";

export default function SingleProductLoading() {
  return (
    <div className="container">
      <Skeleton className="mt-4 w-full lg:w-[625px] h-[20px]" />
      <Skeleton className="lg:hidden mt-2 w-1/2 lg:w-[625px] h-[20px]" />

      <div className="mt-[50px] mb-[40px]  grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex justify-center items-center">
          <Skeleton className="w-[93vw] lg:w-[370px] h-[420px]" />
        </div>

        <div className="lg:col-span-2 space-y-2 lg:space-y-3">
          <Skeleton className="w-full h-[30px]" />
          <Skeleton className="lg:hidden w-1/2 h-[30px]" />
          <Skeleton className="w-[200px] h-[18px]" />
          <Skeleton className="w-[160px] h-[26px]" />
          <Skeleton className="w-[260px] h-[28px]" />
          <div className="pt-3">
            <Skeleton className="w-[320px] h-[30px]" />
          </div>
          <div className="pt-3 space-y-2">
            <Skeleton className="w-full h-[22px]" />
            <Skeleton className="w-full h-[22px]" />
            <Skeleton className="w-full h-[22px]" />
            <Skeleton className="w-2/3 h-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
