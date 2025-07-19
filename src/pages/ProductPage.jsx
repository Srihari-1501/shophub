import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products.js";
import Card from "../components/Card";
import Footer from "../components/Footer.jsx";

const product4 = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 15000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    category: "Electronics",
    featured: true
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 4000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and waterproof design. Track your workouts and health metrics.",
    category: "Electronics",
    featured: true
  },
  {
    id: 3,
    title: "Professional Camera",
    price: 55000,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    description: "Professional-grade camera with 4K video recording and advanced image stabilization. Perfect for photographers and content creators.",
    category: "Electronics",
    featured: true
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    price: 12000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long working hours.",
    category: "Furniture",
    featured: true
  },
];

function ProductPage() {
  function handleClick(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}


  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-4">
          <h1 className="text-red-500 text-xl">Product not found</h1>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mix-h-7xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-2">₹{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            onClick={() => handleClick(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-8 bg-white mb-10">
        <div className="mx-auto w-7xl">
          <h2 className="text-black text-2xl font-bold mb-10">
            Other Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product4.map((product) => (
              <Card
                key={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
                number={product.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="p-6 max-w-3xl mx-auto">
        
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded mb-4" />
        <p className="text-lg text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div> */}
      <Footer />
    </div>

  );
}

export default ProductPage;
