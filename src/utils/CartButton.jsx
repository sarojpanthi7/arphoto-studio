import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ itemCount = 0, totalPrice = 0 }) => {
  return (
    <div className="hover:scale-105 transition-all relative flex items-center bg-yellow-400 px-4 py-2 rounded-full shadow-lg bottom-2">
      <span className="text-lg font-semibold text-black">Cart</span>

      {/* Red Circle with Cart Icon */}
      <div className="relative w-10 h-10 ml-2 flex items-center justify-center bg-red-600 rounded-full shadow-md">
        <FaShoppingCart className="text-black text-lg" />

        {/* Item Count Badge */}
        {itemCount > 0 && (
          <span className="absolute -bottom-1 -right-1 bg-white text-red-600 text-xs font-bold px-1.5 rounded-full">
            {itemCount}
          </span>
        )}
      </div>

      {/* Price Tag */}
      <span className="ml-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">
        NRP {totalPrice}
      </span>
    </div>
  );
};

export default CartButton;
