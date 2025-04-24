import useCartStore from "../stores/useCartStore";

const OrderConfirm = () => {
  const { getTotal } = useCartStore();
  return (
    <div className="inset-0 flex flex-col justify-end items-center space-y-10 absolute z-10 bg-black/25 h-dvh">
      <div className="bg-white rounded-t-2xl w-full h-[85%] bottom-0 pt-10 px-6">
        <img src="/images/icon-order-confirmed.svg" />
        <h1 className="text-[2.5rem] leading-[1.1] font-bold w-16 mt-5">
          Order Confirmed
        </h1>
        <p className="text-amber-900/70 mt-2">We hope you enjoy your food!</p>

        <OrderConfirmList />
        <div className="flex justify-between items-center">
          <p className="text-sm opacity-90">Order Total</p>
          <p className="text-[1.5rem] font-bold">${getTotal().toFixed(2)}</p>
        </div>

        <button className="rounded-full bg-orange-700 py-3.5 text-white font-semiboldd w-full">
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirm;

const OrderConfirmList = () => {
  const { items } = useCartStore();
  return (
    <div>
      {Object.entries(items).map(([key]) => (
        <div className="flex space-x-4">
          <img src={items[key].item.images.thumbnail} />
          <div className="space-y-2 flex justify-between">
            <div>
              <p className="font-semibold text-left">{items[key].item.food}</p>

              <div className="flex text-sm space-x-2">
                <p className="text-orange-700 font-bold w-3">
                  {items[key].quantity}x
                </p>
                <p className="ml-2 text-amber-900/60 font-bold">
                  @&nbsp;${items[key].item.price.toFixed(2)}
                </p>
              </div>
            </div>
            <p className="text-amber-900/90 font-bold">
              ${(items[key].quantity * items[key].item.price).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
