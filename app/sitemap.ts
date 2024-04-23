import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config";
import { getProducts } from "@/utils/get-products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  const staticPaths = [
    "",
    "easy-monthly-installments",
    "shop-by-brands",
    "become-a-vendor",
  ];

  const staticPages = staticPaths.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  const productsPages = products
    ? products.map((product) => ({
        url: `${BASE_URL}/blog/${product.id}`,
        lastModified: new Date().toISOString(),
      }))
    : [];

  return [...staticPages, ...productsPages];
}
