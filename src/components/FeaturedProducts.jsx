import Card from "./Card";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    category: "Electronics",
    featured: true
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and waterproof design. Track your workouts and health metrics.",
    category: "Electronics",
    featured: true
  },
  {
    id: 3,
    title: "Professional Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    description: "Professional-grade camera with 4K video recording and advanced image stabilization. Perfect for photographers and content creators.",
    category: "Electronics",
    featured: true
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long working hours.",
    category: "Furniture",
    featured: true
  }
];


function FeaturedProducts() {
  return (
    <div className="text-center p-8 bg-white">
      <div className="mx-auto w-7xl">
        <h2 className="text-black text-5xl font-bold mb-4">
          Featured Products
        </h2>
        <p className="text-black font-thin mb-10">
          Check out our handpicked selection of amazing products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards */}
          
          {products.map((product) => (
            <Card key={product.id} name={product.title} price={product.price} image={product.image} number={product.id} />    
          ))}          

        </div>
        <Link to="/shop" className="mt-10">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 mx-auto px-6 mt-10 py-3 text-white rounded-xl">View More Products</button>
        </Link>  

      </div>
    </div>
  );
}

export default FeaturedProducts;
