import ApiCalling from './ApiCalling'
import RestaurantCard from './RestaurantCard';
function Body() {
    const data = ApiCalling();
    return (
        <>
            <div className="ml-20 mt-4">
                <h1 className="text-2xl mb-4">
                    Restaurants with online food delivery in <span className="text-indigo-900 font-bold">Mathura</span>
                </h1>

                <button className="border rounded-2xl p-2 mx-4 hover:bg-indigo-900 hover:text-white">
                    Rating 4.5
                </button>

                <button className="border rounded-2xl p-2 mx-4 hover:bg-indigo-900  hover:text-white">
                    Reset
                </button>

                <input
                    className="border rounded-2xl p-2 mx-4"
                    type="text"
                    placeholder="Search restaurants..."
                />
                
            </div>

            <RestaurantCard restArr={data} />


        </>
    );
}

export default Body;