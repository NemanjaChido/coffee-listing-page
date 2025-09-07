import React, {useEffect, useState} from "react";
import { fetchCoffees } from "../services/api";
import CoffeeList from "../components/CoffeeList";

const AllProduct = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    fetchCoffees()
        .then((data) => {
            setCoffees(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching coffees:", error);
            setLoading(false);
        })
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return <CoffeeList coffees={coffees} />;
};

export default AllProduct;