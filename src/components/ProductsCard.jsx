import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center cursor-pointer">
      
      {/* لینک کلیک‌پذیر روی بخش بالا */}
      <Link to={`/product/${product.id}`} className="w-full">
        <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-gradient-to-tr from-yellow-50 to-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-700 transition-colors truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 px-2 truncate">{product.description}</p>
        <p className="text-lg font-bold text-green-600 mt-3">
          ${product.price}
        </p>
      </Link>

      {/* دکمه افزودن به سبد خرید */}
      <Link
        className="mt-4 px-4 py-2 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition"
        to={`/product/${product.id}`}
      >
        افزودن به سبد خرید
      </Link>
    </div>
  );
}
