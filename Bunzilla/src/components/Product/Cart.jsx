import { useState } from "react";

const Cart = ({
  product: incomingProduct,
}) => {
  const [count, setCount] = useState(0);

  const product =
    incomingProduct || {
      name: "Casual Shoes",
      category: "Sports",
      price: 100,
      offerPrice: 80,
      rating: 4,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
    };

  const discount = Math.max(
    0,
    Math.round(((product.price - product.offerPrice) / product.price) * 100)
  );
  return (
    <div className="border border-gray-200 rounded-xl md:px-5 px-4 py-4 bg-linear-to-r from-white to-indigo-50 w-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition-transform duration-300 h-36 md:h-44 object-contain"
          src={product.image}
          alt={product.name}
        />
        {discount > 0 && (
          <span className="absolute left-2 top-2 bg-rose-500 text-white text-xs md:text-sm px-2 py-1 rounded-full shadow">
            -{discount}%
          </span>
        )}
        <span className="absolute right-2 top-2 bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="text-gray-600 text-sm mt-2">
        <p className="text-gray-800 font-semibold text-base md:text-lg truncate w-full">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <svg
                key={i}
                width="14"
                height="13"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                  fill={product.rating > i ? "#FBBF24" : "#FBBF24"}
                  fillOpacity={product.rating > i ? 1 : 0.35}
                />
              </svg>
            ))}
          <p className="text-xs text-gray-500">({product.rating})</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-2xl text-xl font-semibold text-indigo-600">
            ${product.offerPrice}{" "}
            <span className="text-gray-500/70 md:text-sm text-xs line-through ml-1">
              ${product.price}
            </span>
          </p>
          <div className="text-indigo-600">
            {count === 0 ? (
              <button
                aria-label="Add to cart"
                className="flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white md:w-28 w-24 h-9 rounded-full font-medium shadow-sm transition-colors"
                onClick={() => setCount(1)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            ) : (
              <div className="flex items-center justify-between gap-2 md:w-28 w-24 h-9 bg-indigo-50 border border-indigo-200 rounded-full select-none px-2">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="cursor-pointer text-md w-7 h-7 rounded-full bg-white border border-indigo-200 flex items-center justify-center text-indigo-600"
                >
                  -
                </button>
                <span className="w-6 text-center font-medium text-indigo-700">{count}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setCount((prev) => prev + 1)}
                  className="cursor-pointer text-md w-7 h-7 rounded-full bg-white border border-indigo-200 flex items-center justify-center text-indigo-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
