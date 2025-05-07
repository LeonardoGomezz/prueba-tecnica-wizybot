import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="min-w-[400px] bg-gray-200 rounded-lg p-2 shadow flex gap-2">
      <img
        src={product.imageUrl}
        alt={product.displayTitle}
        className="w-24 h-24 object-cover rounded"
      />
      <div>
        <h3 className="mt-2 font-semibold">{product.displayTitle}</h3>
        <p className="text-gray-700">$ 25.99</p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm mt-1"
        >
          View Product
        </a>
      </div>
    </div>
  );
};
