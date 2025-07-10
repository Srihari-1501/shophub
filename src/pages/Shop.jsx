import Navbar from "../components/Navbar";  
import {products} from "../data/products.js";
import Card from "../components/Card";



function Shop() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-3 my-5">
                <h1 className="text-4xl font-extrabold py-3 -mb-2">Shop All Products</h1>
                <p className="font-thin">Discover our complete collection</p>
                <h1>{products[1].id}</h1>
            </div>
            
            <div className="max-w-7xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 ">
                    {products.map((product) => (
                        
                        <Card id={product.id} number={product.id} name={product.title} price={product.price} image={product.image} />
                    ))}
            </div>

        </>
    );
}

export default Shop;