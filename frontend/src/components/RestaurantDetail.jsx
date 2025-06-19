import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
    const [menuCategories, setMenuCategories] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                const res = await axios.get(API);

                const cards = res.data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                const categories = cards
                    ?.filter(card => card?.card?.card?.itemCards)
                    .map(card => ({
                        title: card.card.card.title,
                        items: card.card.card.itemCards.map(item => item.card.info),
                    }));

                setMenuCategories(categories || []);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }

        fetchData();
    }, [id]);

    const imgBase = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Restaurant Menu</h2>

            {menuCategories.length > 0 ? (
                menuCategories.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-green-700">{category.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {category.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border rounded-xl shadow-md hover:-translate-y-5 transform transition duration-300 p-4 flex flex-col items-center text-center"
                                >
                                    <div className="w-full aspect-square mb-3">
                                        {item.imageId && (
                                            <img
                                                src={`${imgBase}${item.imageId}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain rounded"
                                            />
                                        )}
                                    </div>
                                    <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                                    <p className="text-gray-600 font-medium mb-1">
                                        ₹{(item.price || item.defaultPrice) / 100}
                                    </p>
                                    <p className="text-sm text-gray-500 line-clamp-3">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Loading or no menu items found.</p>
            )}
        </div>
    );
}

export default RestaurantDetails;