import Navbar from "../components/Navbar";
import { products } from "../data/products.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const getProductDetails = (id) => {
    const found = products.find((product) => product.id === id);
    if (!found) console.warn("❌ Product not found for id:", id);
    return found;
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleClear = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const product = getProductDetails(item.id);
    if (!product) return total;
    return total + product.price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6"> Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => {
                const product = getProductDetails(item.id);
                if (!product) return null;

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border p-4 rounded"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h2 className="font-semibold">{product.title}</h2>
                        <p>
                          ${product.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="text-right space-y-4">
              <p className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </p>

              <button
                onClick={handleClear}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>

              <br />

              <button
                onClick={() => navigate("/checkout")}
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}


export default Cart;
