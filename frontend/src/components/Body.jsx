import { useEffect, useState } from 'react';
import ApiCalling from './ApiCalling'
import RestaurantCard from './RestaurantCard';
import Search from './Search';
function Body() {
    const data = ApiCalling();

    const [filterData, setFilterData] = useState(data);
    const [Active1, setActive1] = useState(false);
    const [Active2, setActive2] = useState(false);

    function filterByRating() {
        const filtered = data.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setFilterData(filtered);
        setActive1(true);
        setActive2(false);
    }

    function resetFilter() {
        setFilterData(data);
        setActive1(false);
        setActive2(true);

    }

    
    useEffect(() => {
        if (data && data.length > 0) {
            setFilterData(data);

        }
    }, [data])
    return (
        <>
           <div className="px-6 sm:px-10 md:px-20 mt-8 space-y-6">
    <h1 className="text-3xl font-semibold text-gray-800">
        Restaurants with online food delivery in{" "}
        <span className="text-indigo-900 font-bold">Mathura</span>
    </h1>

    <div className="flex flex-wrap items-center gap-4">
        <button
            onClick={filterByRating}
            className={`${
                Active1
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-indigo-900 hover:text-white text-indigo-900"
            } border border-indigo-900 rounded-2xl px-5 py-2 font-medium transition-all duration-300`}
        >
            ⭐ Rating 4.5+
        </button>

        <button
            onClick={resetFilter}
            className={`${
                Active2
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-indigo-900 hover:text-white text-indigo-900"
            } border border-indigo-900 rounded-2xl px-5 py-2 font-medium transition-all duration-300`}
        >
            🔁 Reset
        </button>

        {/* Search Component */}
        <Search data={data} setFilterData={setFilterData} />
    </div>
</div>


            <RestaurantCard restArr={filterData} />


        </>
    );
}

export default Body;