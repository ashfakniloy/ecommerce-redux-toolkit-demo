import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/utils/get-single-product";
import AddToCart from "./add-to-cart";
import StarRating from "@/components/star-rating";

type SingleProductPageProps = {
  params: {
    id: string;
  };
};

// fetching data from server component instead of rtk query, as this page will be important for seo

export async function generateMetadata({
  params: { id },
}: SingleProductPageProps): Promise<Metadata> {
  const product = await getSingleProduct({
    id,
  });

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      type: "article",
      title: product.title,
      description: product.description,
      images: {
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.title,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: {
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.title,
      },
      site: "@winstore",
    },
  };
}

export default async function SingleProductPage({
  params: { id },
}: SingleProductPageProps) {
  const product = await getSingleProduct({ id });

  if (!product) {
    notFound();
  }

  const { title, category, description, image, price, rating } = product;

  return (
    <section className="container">
      <p className="py-4 text-sm text-gray-700 capitalize">{`Products / ${category} / ${title}`}</p>

      <div className="mt-7 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex justify-center items-center lg:h-full">
          <Image src={image} alt={title} width={300} height={350} />
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-[22px] lg:text-3xl font-medium">{title}</h1>

          <div className="mt-1 lg:mt-2 flex gap-5">
            <StarRating rating={rating.rate} />
            <p>{rating.count} ratings</p>
          </div>

          <p className="mt-1 lg:mt-2 text-xl font-semibold text-gray-600">
            Price: <span className="text-custom-cyan3">RS {price}</span>
          </p>

          <div className="mt-2">
            <AddToCart product={product} />
          </div>

          <p className="mt-7">{description}</p>
        </div>
      </div>
    </section>
  );
}
