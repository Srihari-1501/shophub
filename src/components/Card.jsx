import { Link,useNavigate } from "react-router-dom";   


function Card(props) {
    const navigate = useNavigate();
    return (
        
        <div className="bg-gray-100 max-w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" onClick={() => navigate('/product/' + props.number)}>
            
            <img
              src={props.image}
              className="w-full h-48 object-cover mb-4 rounded"
              alt="Product 1"
            />
            <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
            <p className="text-gray-600 mb-4">₹{props.price}</p>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  mb-6">
              Add to Cart
            </button> */}
        </div>
    );

}

export default Card;

