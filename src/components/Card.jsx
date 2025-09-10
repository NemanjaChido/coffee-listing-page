const Card = ({image, name, price, popular, rating, votes, inStock}) => {

    return (
        <div className="flex flex-col rounded-md overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="relative w-full rounded-md h-[70%]">
                {popular && (
                    <span className="absolute top-[5%] left-[5%] px-3 py-1 text-base md:text-xs text-shadow-xs bg-[#F6C768] rounded-xl">
                        Popular
                    </span>
                )}
                <img className="w-full h-full object-cover rounded-md" src={image} alt={name} />
            </div>
            <div className="flex flex-col gap-2 py-2 w-full h-[30%]">
                <div className="flex flex-row justify-between items-center font-bold w-full">
                    <div className="w-[60%] text-white text-[0.8rem]"><p>{name}</p></div>
                    <span className="text-[0.75rem] text-gray-500 block px-3 py-1 bg-[#BEE3CC] rounded-md">{price}</span>
                </div>
                <div className="flex flex-row w-full">
                    <div className="text-gray-700 text-[0.8rem] w-[60%] flex flex-row">
                        {typeof rating === "number" ? (
                            <span className="text-white">
                                <i className="fa-solid fa-star text-yellow-400"></i> {rating.toFixed(1)}
                            </span>
                        ) : (<span>
                            <i className="fa-solid fa-star"></i>
                        </span>)}
                        &nbsp;
                        {votes ? (
                            <span className="text-gray-500">
                                ({votes} {votes === 1 ? 'vote' : 'votes'})
                            </span>
                        ) : (<span className="text-gray-500">No ratings</span>)}
                    </div>
                    {!inStock && (
                        <div className="text-[#ED735D] text-base w-[40%] text-right font-bold">
                            sold out
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;