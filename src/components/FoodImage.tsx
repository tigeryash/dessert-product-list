import useCartStore from "../stores/useCartStore";
import { DessertItemImages } from "../types/types";

type FoodImageProps = {
  images: DessertItemImages;
  title: string;
};

const FoodImage = ({ images, title }: FoodImageProps) => {
  const { items } = useCartStore();
  return (
    <picture>
      {/* Desktop image (>= 1024px) */}
      <source media="(min-width: 1280px)" srcSet={images.dImg} />

      {/* Tablet image (>= 640px) */}
      <source media="(min-width: 640px)" srcSet={images.tImg} />

      {/* Mobile image (default) */}
      <img
        className={`rounded-lg w-full ${
          items[title]?.quantity > 0 ? "ring-2 ring-orange-700" : ""
        }`}
        src={images.mImg}
        alt={`${title} image`}
      />
    </picture>
  );
};

export default FoodImage;
