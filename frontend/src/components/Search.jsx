import React from 'react'

function Search({ data, setFilterData }) {

    function search(searchText){
        let searchRestaurant = data.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterData(searchRestaurant);
    }
  return (
    <div>
        <input
                className="border rounded-2xl p-2 mx-4"
                type="text"
                placeholder="Search restaurants..."
                onChange={(e) => search(e.target.value)}
                />
    </div>
  )
}

export default Search