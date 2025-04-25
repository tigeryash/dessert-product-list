import { desserts } from "../lib/constants";
import { DessertItem } from "../types/types";
import FoodCard from "./FoodCard";

const FoodList = () => {
  return (
    <div className="space-y-7 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[65%] xl:pt-8 sm:gap-7 sm:space-y-0">
      {desserts.map((dessert: DessertItem, idx) => (
        <FoodCard key={idx} dessert={dessert} />
      ))}
    </div>
  );
};

export default FoodList;
