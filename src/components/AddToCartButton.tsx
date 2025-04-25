import useCartStore from "../stores/useCartStore";
import { DessertItem } from "../types/types";

type AddToCartButtonProps = {
  dessert: DessertItem;
};

const AddToCartButton = ({ dessert }: AddToCartButtonProps) => {
  const { addItem, isAddedToCart, items, removeItem } = useCartStore();

  return isAddedToCart(dessert) ? (
    <div
      className={`rounded-full flex gap-2 justify-between absolute -bottom-0 left-1/2 -translate-x-1/2 
      translate-y-1/2 font-semibold bg-orange-700 space-x-8 px-3 
       whitespace-nowrap text-black py-3 
       ${
         items[dessert.title].quantity === 0 ? "border-stone-400  border-1" : ""
       }`}
    >
      <button
        onClick={() => removeItem(dessert)}
        className="border border-white rounded-full p-1.5 flex justify-center items-center
         h-6 w-6 aspect-square  cursor-pointer"
      >
        <img
          src="./images/icon-decrement-quantity.svg"
          color="orange"
          alt="decrease"
        />
      </button>
      <p className="text-white w-6 text-center">
        {items[dessert.title].quantity}
      </p>

      <button
        onClick={() => {
          addItem(dessert);
          console.log("pressed");
        }}
        className="border border-white rounded-full p-1.5 flex justify-center items-center
         h-6 w-6 aspect-square  cursor-pointer"
      >
        <img src="./images/icon-increment-quantity.svg" alt="increase" />
      </button>
    </div>
  ) : (
    <button
      onClick={() => {
        addItem(dessert);
        console.log("pressed");
      }}
      className="rounded-full flex items-center justify-center gap-2 absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
  font-semibold bg-white px-6 border-stone-400 border-1 whitespace-nowrap  text-black  py-2.5 cursor-pointer 
   "
    >
      <img src="./images/icon-add-to-cart.svg" alt="" /> Add To Cart
    </button>
  );
};

export default AddToCartButton;
