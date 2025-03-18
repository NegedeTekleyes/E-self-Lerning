"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-[#8E1616]">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.slug}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.slug)}
                className="bg-[#8E1616] text-white px-4 py-2 rounded hover:bg-[#D84040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84040]"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="bg-[#8E1616] text-white px-5 py-2 rounded hover:bg-[#D84040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84040]">
                Schedule Payment
              </button>
              <button className="bg-[#8E1616] text-white px-5 py-2 rounded hover:bg-[#D84040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84040]">
                Half Payment
              </button>
              <button className="bg-[#8E1616] text-white px-5 py-2 rounded hover:bg-[#D84040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84040]">
                Full Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
