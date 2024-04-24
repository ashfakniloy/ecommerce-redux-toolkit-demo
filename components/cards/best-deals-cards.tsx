import Image from "next/image";
import Laptop from "@/public/images/deals/laptop.png";
import Watch from "@/public/images/deals/watch.png";
import Dress from "@/public/images/deals/dress.png";
import Earbuds from "@/public/images/deals/earbuds.png";

export const bestDealsCards = [
  {
    id: 1,
    card: (
      <div className="grid grid-cols-2">
        <div>
          <p className="text-xl leading-snug">Nintendo Switch Console</p>
          <p className="text-xl text-custom-blue">RS 65,208</p>
          <p className="mt-2">
            RS. <span className="line-through">66,000</span>
          </p>
          <div className="mt-5 w-[130px] p-3 flex justify-center items-center text-2xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
            <span className="text-center">
              Save
              <br />
              10%
            </span>
          </div>
        </div>

        <div>
          <p className="ml-10 text-[35px] leading-tight">
            <span className="text-custom-blue">Special</span>
            <br /> Offer
          </p>

          <Image src={Laptop} alt="laptop" className="mt-5" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    card: (
      <div>
        <div className="relative">
          <p className="absolute left-0 top-0 text-[35px] leading-tight">
            <span className="text-[#C82020]">Special</span>
            <br /> Offer
          </p>

          <div className="flex justify-center items-center">
            <Image src={Watch} alt="watch" />
          </div>

          <div className="absolute top-0 -right-5 size-[140px] rounded-full p-3 flex justify-center items-center leading-tight text-[35px] text-white bg-gradient-to-r from-[#FF512F] to-[#DD2476]">
            <span className="text-center">
              Save
              <br />
              10%
            </span>
          </div>
          <div>
            <p className="text-xl">Nintendo Switch Console</p>
            <div className="flex items-center gap-3">
              <p className="text-lg text-custom-blue">RS 65,208</p>
              <p>
                RS <span className="line-through">66,000</span>
              </p>
            </div>
            <div className="mt-2 flex gap-10 text-custom-cyan text-xl">
              <p>Already Sold: 6</p>
              <p>Available: 30</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    card: (
      <div className="grid grid-cols-2">
        <div>
          <p className="text-xl leading-snug">Nintendo Switch Console</p>
          <p className="text-xl text-custom-blue">RS 65,208</p>
          <p className="mt-2">
            RS. <span className="line-through">66,000</span>
          </p>
          <div className="mt-2 w-[150px] p-3 flex justify-center items-center text-3xl bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2]">
            <span className="text-center">
              Save
              <br />
              10%
            </span>
          </div>
        </div>

        <div>
          <p className="text-[35px] leading-tight text-center">
            <span className="text-custom-blue">Special</span>
            <br /> Offer
          </p>

          <Image src={Dress} alt="dress" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    card: (
      <div className="grid grid-cols-2">
        <div>
          <p className="text-[35px] leading-tight">
            <span className="text-[#C82020]">Special</span>
            <br /> Offer
          </p>
          <div>
            <p className="text-xl leading-snug">Nintendo Switch</p>
            <p className="text-xl text-[#C82020]">RS 65,208</p>
            <p className="mt-2">
              RS. <span className="line-through">66,000</span>
            </p>
            <div className="mt-2 space-y-1 text-custom-blue text-lg">
              <p>Already Sold: 6</p>
              <p>Available: 30</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto size-[90px] rounded-full p-3 flex justify-center items-center text-2xl bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]">
            <span className="text-center">
              Save
              <br />
              10%
            </span>
          </div>

          <Image src={Earbuds} alt="earbuds" />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    card: (
      <div>
        <div className="relative">
          <p className="absolute left-0 top-0 text-[35px] leading-tight">
            <span className="text-[#C82020]">Special</span>
            <br /> Offer
          </p>

          <div className="flex justify-center items-center">
            <Image src={Laptop} alt="laptop" className="mt-5" />
          </div>

          <div className="absolute top-0 -right-4 size-[140px] rounded-full p-3 flex justify-center items-center leading-tight text-[35px] bg-gradient-to-r from-[#F09819] to-[#EDDE5D]">
            <span className="text-center">
              Save
              <br />
              10%
            </span>
          </div>
          <div className="mt-3">
            <p className="text-xl">Nintendo Switch Console</p>
            <div className="flex items-center gap-3">
              <p className="text-lg text-custom-blue">RS 65,208</p>
              <p>
                RS <span className="line-through">66,000</span>
              </p>
            </div>
            <div className="mt-2 flex gap-10 text-[#C82020] text-xl">
              <p>Already Sold: 6</p>
              <p>Available: 30</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
