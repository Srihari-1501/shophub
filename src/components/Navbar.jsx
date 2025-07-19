import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 max-w-7xl mx-auto shadow-y-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl font-bold"><a href="#"className="">ShopHub</a></div>
        {/* <ul className="flex space-x-4">
          <li>
            <a href="/" className=" hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className=" hover:text-gray-400">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className=" hover:text-gray-400">
              About
            </a>
          </li>
        </ul> */}

        <Link to="/cart">
        <button className="px-3 py-2 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-lg" to="/cart">
          Cart
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
