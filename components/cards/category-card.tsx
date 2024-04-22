import Image from "next/image";

export default function CategoryCard({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) {
  return (
    <div className="w-[272px] h-[200px] relative border border-white">
      <Image src={imageSrc} alt={name} fill className="object-cover" />
      <div className="absolute bottom-3 -left-2.5 w-[95%] px-5 py-2 shadow-md bg-white/95">
        <div className="flex justify-between items-center">
          <p className="text-[25px]">{name}</p>
          <p className="text-[21px] text-custom-blue">Shop</p>
        </div>
        <span className="absolute top-[-5px] left-0 border-t-[5px] border-t-transparent border-r-[12px] border-r-gray-600" />
      </div>
    </div>
  );
}
