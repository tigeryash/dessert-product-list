import useCartStore from "../stores/useCartStore";
import { DessertItem } from "../types/types";

type CartItemProps = {
  item: { quantity: number; item: DessertItem };
};

const CartItem = ({ item }: CartItemProps) => {
  const { deleteItem } = useCartStore();
  return (
    <div className="flex justify-between items-center border-b-1 border-b-orange-300/20 pb-5">
      <div className="space-y-2">
        <p className="font-semibold text-left">{item.item.food}</p>

        <div className="flex text-sm space-x-2">
          <p className="text-orange-700 font-bold w-3">{item.quantity}x</p>
          <p className="ml-2 text-amber-900/60 font-bold">
            @&nbsp;${item.item.price.toFixed(2)}
          </p>
          <p className="text-amber-900/90 font-bold">
            ${(item.quantity * item.item.price).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => deleteItem(item.item)}
        className="rounded-full border-2 p-1 border-amber-800/40"
      >
        <img src="images/icon-remove-item.svg" alt="delete item" />
      </button>
    </div>
  );
};

export default CartItem;
