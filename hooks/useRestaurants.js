import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchRestaurant = async ( searchTerm ) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    location: 'san jose',
                    term: searchTerm,
                    limit: 50
                }
            })
            setRestaurants(response.data.businesses);
        } catch (error) {
            setErrorMessage("Something went wrong.")
        }
    }

    useEffect(() => {
        searchRestaurant("Pasta")
    }, [])

    return [restaurants, errorMessage, searchRestaurant];
}