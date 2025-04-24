import useCartStore from "../stores/useCartStore";
import { DessertItemImages } from "../types/types";

type FoodImageProps = {
  images: DessertItemImages;
  title: string;
};

const FoodImage = ({ images, title }: FoodImageProps) => {
  const { items } = useCartStore();
  return (
    <img
      className={`rounded-lg ${
        items[title]?.quantity > 0 ? "ring-2 ring-orange-700" : ""
      }`}
      src={images.mImg}
      alt=""
    />
  );
};

export default FoodImage;
