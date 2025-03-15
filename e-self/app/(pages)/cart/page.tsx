'use client';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-[#8E1616]">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.slug} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.slug)}
                className="bg-[#8E1616] text-white px-4 py-2 rounded hover:bg-[#D84040] transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}