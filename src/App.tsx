import Title from "./components/Title";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import useCartStore from "./stores/useCartStore";
import OrderConfirm from "./components/OrderConfirm";
import { useEffect } from "react";

function App() {
  const { confirmOrder } = useCartStore();

  useEffect(() => {
    if (confirmOrder) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [confirmOrder]);
  return (
    <>
      {confirmOrder && <OrderConfirm />}
      <main
        className={`min-h-screen flex flex-col space-y-8 xl:space-y-0 px-6 py-6 font-sans xl:p-20 ${
          confirmOrder && "pointer-events-none "
        }`}
      >
        <Title />
        <div className="flex flex-col space-y-8 xl:flex-row md:space-y-0 xl:justify-between ">
          <FoodList />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
