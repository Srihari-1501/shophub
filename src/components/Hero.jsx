import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 min-h-[50vh] text-center ">
      <div className="my-5">
        <h1 className="text-6xl font-bold pt-4 text-white">
          Discover Amazing Products
        </h1>
        <p className="text-xl text-white mt-4 max-w-2xl mx-auto pt-5 font-light">
          Shop the latest trends and find everything you need in one place.
          Quality products, great prices, and exceptional service.
        </p>

        <Link to="/shop" className="mt-10">
          <button className="border text-xl text-white  border-white px-5 py-3 hover:text-black hover:bg-white rounded-lg mt-10">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
