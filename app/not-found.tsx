import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[40vh]">
      <h1 className="text-6xl lg:text-8xl font-bold text-red-400">404</h1>
      <h5 className="font-bold text-3xl lg:text-5xl text-red-700">
        Page not found
      </h5>
    </div>
  );
}
