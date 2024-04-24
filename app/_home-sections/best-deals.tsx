import { bestDealsCards } from "@/components/cards/best-deals-cards";

export default function BestDeals() {
  return (
    <section className="container py-8 lg:py-[60px]">
      <p className="text-[28px]">
        <span className="text-custom-cyan">Best</span> Deals
      </p>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2">
        {bestDealsCards.map((deal, i) => (
          <div
            key={i}
            className={`p-5 border hover:shadow-md transition-shadow duration-300 cursor-pointer ${
              i === 1 && "row-span-2"
            }`}
          >
            {deal.card}
          </div>
        ))}
      </div>
    </section>
  );
}
