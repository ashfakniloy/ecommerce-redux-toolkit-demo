import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductCard({
  title,
  image,
  price,
}: {
  title: string;
  image: string;
  price: number;
}) {
  return (
    <div className="w-[186px] p-[14px] border">
      <p className="text-xs">Bin Bakar Electronics</p>
      <p className="mt-[11px] text-[15px] truncate">{title}</p>
      {/* <div className="mt-[11px] h-[150px]">
        <Image src={image} alt={title} width={100} height={100} />
      </div> */}
      <div className="mt-[11px] flex  justify-center h-[150px]">
        <Image
          src={image}
          alt="arrivals-image"
          width={100}
          height={100}
          className="w-auto"
        />
      </div>
      <p className="mt-[11px] text-[15px] text-custom-cyan3">RS {price}</p>
      <Button type="button" variant="classic" className="mt-[11px]">
        Add to cart
      </Button>
    </div>
  );
}
