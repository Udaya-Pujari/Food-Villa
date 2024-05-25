import { useDispatch, useSelector } from "react-redux";
import { claerCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
const dispatch=useDispatch()

  const handleClearCart = () => {dispatch(claerCart())};
  return (
    <>
      <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
          <button
            className="m-2 p-2 border bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {/* pass in the cart items as   <ItemList items={cartItems}/> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
