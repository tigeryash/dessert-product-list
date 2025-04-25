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
        className={`flex flex-col space-y-8 px-6 py-6 font-sans ${
          confirmOrder && "pointer-events-none "
        }`}
      >
        <Title />
        <FoodList />
        <Cart />
      </main>
    </>
  );
}

export default App;
