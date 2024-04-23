import Banner from "./_home-sections/banner";
import Categories from "./_home-sections/categories";
import NewArrivals from "./_home-sections/new-arrivals";
import ProductsByCategory from "./_home-sections/products-by-category";

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
