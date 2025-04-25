import { useEffect, useRef } from "react";
import useCartStore from "../stores/useCartStore";
import { motion, PanInfo, useAnimate } from "motion/react";

const OrderConfirm = () => {
  const { getTotal, setConfirmOrder } = useCartStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  const animateDismiss = () => {
    return animate(scope.current, { y: "100%" }, { duration: 0.15 }).then(() =>
      setConfirmOrder(false)
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        scope.current &&
        !scope.current.contains(e.target as Node) &&
        containerRef.current &&
        containerRef.current.contains(e.target as Node)
      ) {
        animateDismiss();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setConfirmOrder]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 100) {
      // If dragged down far enough, animate out then close
      animateDismiss();
    } else {
      // If not dragged far enough, snap back
      animate(scope.current, { y: 0 }, { ease: "easeOut" });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      transition={{ duration: 0 }}
      className="inset-0 flex flex-col justify-end items-center space-y-10 fixed z-10  h-dvh"
    >
      <motion.div
        ref={scope}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        className="bg-white rounded-t-2xl w-full h-[85%] bottom-0 pt-4 px-6 "
      >
        <div className="w-20 h-[12px] bg-black/25 mx-auto rounded-full mb-4"></div>
        <div className="max-h-[523px] overflow-y-auto pb-[50px]">
          <img src="/images/icon-order-confirmed.svg" />
          <h1 className="text-[2.5rem] leading-[1.1] font-bold w-16 mt-5">
            Order Confirmed
          </h1>
          <p className="text-amber-900/70 mt-2">We hope you enjoy your food!</p>
          <OrderConfirmList />
          <div className="flex justify-between items-center px-6 mb-12">
            <p className="text-sm opacity-90">Order Total</p>
            <p className="text-[1.5rem] font-bold">${getTotal().toFixed(2)}</p>
          </div>
          <button className="rounded-full bg-orange-700 py-3.5 text-white font-semibold w-full">
            Start New Order
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OrderConfirm;

const OrderConfirmList = () => {
  const { items } = useCartStore();
  return (
    <div className="px-6 py-5 ">
      {Object.entries(items).map(([key]) => (
        <div
          key={key}
          className="flex space-x-4 py-4 border-b-1 border-amber-500/20 "
        >
          <img
            className="w-14 h-14 rounded-lg"
            src={items[key].item.images.thumbnail}
          />
          <div className="space-y-2 flex justify-between w-full">
            <div className="space-y-1">
              <p className="font-semibold text-left text-nowrap truncate w-36">
                {items[key].item.title}
              </p>

              <div className="flex text-sm gap-2">
                <p className="text-orange-700 font-bold w-3">
                  {items[key].quantity}x
                </p>
                <p className="ml-2 text-amber-900/60 font-bold">
                  @&nbsp;${items[key].item.price.toFixed(2)}
                </p>
              </div>
            </div>
            <p className="text-stone-900/90 font-bold   text-center my-auto">
              ${(items[key].quantity * items[key].item.price).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
