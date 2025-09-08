import React, { useEffect, useState } from "react";
import { fetchCoffees } from "../services/api";
import Card from "./Card";

const CoffeeList = ({coffees}) => {
    const [localCoffees, setLocalCoffees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!coffees) {
            fetchCoffees()
                .then((data) => {
                  setLocalCoffees(data);
                  setLoading(false);
                })
                .catch((error) => {
                  console.error("Error fetching coffees:", error);
                  setLoading(false);
                });
        } else {
          setLoading(false);
        }
    }, [coffees]);

    if (loading) return <div>Loading...</div>;

    const displayCoffees = coffees || localCoffees;

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 p-2 h-full w-full">
            {displayCoffees.map((coffee) => (
                <Card key={coffee.id} {...coffee} />
            ))}
        </div>
    );
}

export default CoffeeList;