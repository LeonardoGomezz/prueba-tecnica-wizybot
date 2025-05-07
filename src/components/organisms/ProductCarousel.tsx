import type { Product } from "../../types/product";
import { ProductCard } from "../molecules/ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <div className="flex space-x-4 overflow-x-auto p-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
