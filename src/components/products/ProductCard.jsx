import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProductCard = ({ product }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Ensure product and images exist
  if (!product || !product.images || !product.images[0]) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden"
    >
      <div className="absolute top-8 z-10 left-4 text-gray-800 bg-[#fed700] w-16 text-center font-semibold text-sm">
        SALE
      </div>
      <div className="w-auto h-[430px] overflow-hidden rounded-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <div className="flex gap-3">
        <p className="text-gray-700">${product.price}</p>
        <span className="text-gray-300 line-through">
          {product.price + 999}
        </span>
      </div>
      <p className="text-gray-700 text-sm">
        {product.category?.name?.toUpperCase() || "CATEGORY"}
      </p>
      <button className="bg-gray-100 active:bg-[#FFC300] hover:bg-[#FFC300] hover:text-black text-gray-500 py-2 px-4 rounded mt-2 cursor-pointer text-md">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
