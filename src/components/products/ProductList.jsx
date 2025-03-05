import { useFetch } from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

export const ProductList = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;
  const ToBeDisplayed = products.slice(0, 9);
  return (
    <div className="my-8 lg:my-16 px-4 mx-1 lg:mx-20">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center lg:text-start mb-6">
        Trending Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ToBeDisplayed.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
