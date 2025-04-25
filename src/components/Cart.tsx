import useCartStore from "../stores/useCartStore";
import CartItem from "./CartItem";

const Cart = () => {
  const { getTotal, getItemCount, items, setConfirmOrder } = useCartStore();
  return (
    <div
      className="px-6 xl:px-0 space-y-6 text-center 
      xl:w-[30%]"
    >
      <h3 className="text-2xl font-bold text-orange-700 text-left">
        Your Cart ({getItemCount()})
      </h3>

      {!getItemCount() ? (
        <div className="space-y-6 mx-auto">
          <img className="mx-auto" src="/images/illustration-empty-cart.svg" />

          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="space-y-9">
          {Object.entries(items).map(([key]) => (
            <CartItem key={key} item={items[key]} />
          ))}
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-90">Order Total</p>
            <p className="text-[1.5rem] font-bold">${getTotal().toFixed(2)}</p>
          </div>
          <p className="flex space-x-1 text-sm justify-center">
            <img src="/images/icon-carbon-neutral.svg" /> This is a&nbsp;
            <span className="font-bold"> carbon-neutral</span>&nbsp;delivery
          </p>
          <button
            onClick={() => {
              setConfirmOrder(true);
            }}
            className="rounded-full bg-orange-700 py-3.5 text-white font-semibold w-full
            hover:bg-orange-900"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
