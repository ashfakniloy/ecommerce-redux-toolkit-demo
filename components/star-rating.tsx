import { Star } from "./icons";

export default function StarRating({ rating }: { rating: number }) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const starCount = [...Array(5)];

  return (
    <div className="flex">
      {starCount.map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < filledStars
              ? "text-yellow-500 fill-yellow-500"
              : hasHalfStar && i === filledStars
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300 fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
