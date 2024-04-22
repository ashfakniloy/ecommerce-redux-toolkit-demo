import Banner from "./banner";
import Categories from "./categories";
import NewArrivals from "./new-arrivals";
import ProductsByCategory from "./products-by-category";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <NewArrivals />
      <ProductsByCategory />
    </>
  );
}
