import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [query, setQuery] = useState("love");
    const [size, setSize] = useState("small");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number < 1 || number > 100) {
            alert("Number must be between 1 and 100");
            return;
        }
        navigate(`/fav/${number}?q=${query}&size=${size}`);
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">This is the Favourites Page.</h1>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
                <div>
                    <label className="block text-sm font-medium">Number (1-100)</label>
                    <input 
                        type="number" 
                        min="1" 
                        max="100" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)}
                        className="border p-2 w-full rounded-md" 
                        required 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium">Query Parameter (q)</label>
                    <div className="flex space-x-4">
                        <label><input type="radio" value="love" checked={query === "love"} onChange={() => setQuery("love")} /> Love</label>
                        <label><input type="radio" value="like" checked={query === "like"} onChange={() => setQuery("like")} /> Like</label>
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium">Size Parameter (size)</label>
                    <div className="flex space-x-4">
                        <label><input type="radio" value="small" checked={size === "small"} onChange={() => setSize("small")} /> Small</label>
                        <label><input type="radio" value="medium" checked={size === "medium"} onChange={() => setSize("medium")} /> Medium</label>
                        <label><input type="radio" value="large" checked={size === "large"} onChange={() => setSize("large")} /> Large</label>
                    </div>
                </div>
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Submit</button>
            </form>
        </div>
    );
};

export default Favourite;
