import { useState, useEffect } from 'react';
import axios from 'axios';

function ApiCalling() {
    const [data, setData] = useState([]);
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    useEffect(() => {
        async function calling() {
            try {
                const response = await axios.get(API);
                console.log(response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                setData(response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        calling();
    }, []);

    return data;
}

export default ApiCalling;