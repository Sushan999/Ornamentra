import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { necklaces } from "../../assets/assets.js";

const Details = () => {
  const { id } = useParams();
  const product = necklaces.find((item) => item._id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500 font-semibold">
        Product not found
      </div>
    );
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="grid grid-cols-2 gap-4">
        {[product.img, product.img2, product.img3, product.img4].map(
          (img, i) => (
            <div key={i} className="w-full h-[280px] md:h-[300px]">
              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl shadow-sm hover:scale-105 transition-transform"
              />
            </div>
          )
        )}
      </div>

      <div className="space-y-6">
        <p className="text-sm text-gray-500 font-medium">Ornamentra ®</p>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold">
          {product.name}
        </h1>
        <div className="border-t pt-4 text-sm text-gray-600">
          🚚 Complimentary Shipping & Returns
        </div>

        <div className="flex items-center gap-4 border-t pt-4">
          <span className="text-gray-700 text-sm font-medium">Quantity</span>
          <div className="flex items-center border rounded px-3 py-1">
            <button onClick={decreaseQty} className="text-lg px-2">
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={increaseQty} className="text-lg px-2">
              +
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold">
            ${product.price.toLocaleString()}
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm uppercase font-semibold hover:bg-gray-800 transition">
            Add to Bag
          </button>
        </div>

        <div className="mt-2"></div>

        <div className="pt-6 border-t">
          <h3 className="text-md font-semibold mb-2">Description & Details</h3>
          <p className="text-sm text-gray-700 mb-3">{product.description}</p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            {product.detail.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
