import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { handleDiscount } from "../../redux/slices/cart";

const Checkout = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state: RootState) => state.cart.basket)
    const discount = useSelector((state:RootState) => state.cart.discount)
    var totalPrice = basket.reduce(function (r, a) {
        return r + Number(a.price)*a.count;
       
    }, 0);

    console.log(JSON.stringify(basket),"totalPrice",basket  )
    return (
        <div className="fixed w-1/3 my-3 h-80 rounded-lg right-0 border border-gray-100 bg-white shadow-md">
            {discount ? totalPrice*0.8 : totalPrice}
            <button onClick={()=> dispatch(handleDiscount({totalPrice}))}>İndirim </button>
        </div>
    )
}

export default Checkout;