import { desserts } from "../lib/constants";
import { DessertItem } from "../types/types";
import FoodCard from "./FoodCard";

const FoodList = () => {
  return (
    <div className="space-y-7">
      {desserts.map((dessert: DessertItem, idx) => (
        <FoodCard key={idx} dessert={dessert} />
      ))}
    </div>
  );
};

export default FoodList;
