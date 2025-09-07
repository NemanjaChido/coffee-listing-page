import { Link, useLocation } from "react-router-dom";

const CardHeader = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 py-3">
            <h1 className="text-white font-bold text-[2rem]">Our Collection</h1>
            <p className="text-[#4D5562] text-[0.8rem] md:text-[1rem] md:w-[60%]">Introducing our Coffee Collection, a selection of unique coffees 
                from different roast types and origins, expertly roasted in small batches and shipped weekly.</p>
            <div className="w-full text-[0.875rem] flex flex-row items-center justify-center gap-2 py-2 mt-2">
                <Link 
                    to="/" 
                    className={`px-3 py-2 rounded-md text-shadow-xs font-bold text-white
                            ${location.pathname === '/' ? 'bg-[#4D5562]' : ''}`}>
                    All Products
                </Link>
                <Link 
                    to="/available" 
                    className={`px-3 py-2 rounded-md text-shadow-xs font-bold text-white ${
                            useLocation().pathname === '/available' ? 'bg-[#4D5562]' : ''
                    }`}>
                    Available Now
                </Link>
            </div>
        </div>
    );
};

export default CardHeader;