import { useState, useEffect } from "react";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const product = getProductDetails(item.id);
    if (!product) return total;
    return total + product.price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address) {
      alert("❌ Please fill in all fields");
      return;
    }

    alert("✅ Order placed successfully!");
    localStorage.removeItem("cart");
    setCartItems([]);
    navigate("/"); // redirect to homepage after order
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6"> Checkout</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
              {cartItems.map((item) => {
                const product = getProductDetails(item.id);
                if (!product) return null;

                return (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>
                      {product.title} × {item.quantity}
                    </span>
                    <span>${(product.price * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
              <p className="text-right font-bold mt-3">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Shipping Info</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  name="address"
                  placeholder="Shipping Address"
                  className="w-full p-2 border rounded"
                  value={form.address}
                  onChange={handleChange}
                ></textarea>
              </form>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
