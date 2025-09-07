import React, { useEffect, useState } from "react";
import { fetchCoffees } from "../services/api";
import CoffeeList from "../components/CoffeeList";

const Available = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchCoffees()
        .then((data) => {
          setCoffees(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching coffees:", error);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    // Only coffees that are in stock
    const availableCoffees = coffees.filter(coffee => coffee.inStock);

    return (
      <>
        {availableCoffees.length === 0 ? (
          <div className=" text-gray-500 py-10 w-full h-80 bg-inherit border border-[#4D5562] flex items-center justify-center">
            No coffees are currently available.
          </div>
        ) : (
          <CoffeeList coffees={availableCoffees} />
        )}
      </>
    );
};

export default Available;