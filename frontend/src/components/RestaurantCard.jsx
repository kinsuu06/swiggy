import { PiStarLight } from "react-icons/pi";
function RestaurantCard({ restArr }) {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restArr.map((restaurant, index) => {
                const { name, avgRating, cuisines, locality, cloudinaryImageId } = restaurant.info;

                return (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
                    >
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                            alt={name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
                            <div className="flex items-center text-sm text-gray-600 mb-1">
                                <span className="text-yellow-500 font-bold flex gap-1"><PiStarLight className="mt-1"/>{avgRating}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span>{cuisines.join(', ')}</span>
                            </div>
                            <p className="text-sm text-gray-500">{locality}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RestaurantCard;