import { DessertItem } from "../types/types";
import AddToCartButton from "./AddToCartButton";
import FoodImage from "./FoodImage";

type FoodCardProps = {
  dessert: DessertItem;
};

const FoodCard = ({ dessert }: FoodCardProps) => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <FoodImage images={dessert.images} title={dessert.title} />
        <AddToCartButton dessert={dessert} />
      </div>

      <div className="space-y-0.5">
        <p className="text-orange-900 opacity-60">{dessert.food}</p>
        <p className="font-semibold text-lg">{dessert.title}</p>
        <p className="font-semibold text-lg text-orange-700">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
