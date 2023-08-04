import Basket from "../../components/basket";
import Checkout from "../../components/checkout";

const Cart = () => {
    return (
        <div className="flex justify-between p-2">
            <Basket />
            <Checkout />
        </div>
    )
}

export default Cart;