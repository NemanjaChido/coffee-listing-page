import { Link, useLocation } from "react-router-dom";

const CardHeader = () => {
    const bgImageLink = import.meta.env.BASE_URL + "resources/vector.svg";

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImageLink})`}}>
            <h1 className="text-white font-bold text-[1.2rem]">Our Collection</h1>
            <p className="text-[#4D5562] text-[0.8rem] mb-2 font-bold text-center block w-[60%]">Introducing our Coffee Collection, a selection of unique coffees 
                from different roast types and origins, expertly roasted in small batches and shipped weekly.</p>
            <div className="w-full text-[0.8rem] flex flex-row items-center justify-center gap-2">
                <Link 
                    to="/coffee-listing-page" 
                    className={`px-3 py-1 rounded-md text-shadow-xs font-bold text-white
                            ${location.pathname === '/coffee-listing-page' ? 'bg-[#4D5562]' : ''}`}>
                    All Products
                </Link>
                <Link 
                    to="/available" 
                    className={`px-3 py-1 rounded-md text-shadow-xs font-bold text-white ${
                            useLocation().pathname === '/available' ? 'bg-[#4D5562]' : ''
                    }`}>
                    Available Now
                </Link>
            </div>
        </div>
    );
};

export default CardHeader;