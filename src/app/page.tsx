// app/page.tsx (or app/products/page.tsx depending on your routing)
import FilterableProductList from "@/components/products/FilterableProductList";

export default async function HomePage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return <FilterableProductList initialProducts={data.products} />;
}
