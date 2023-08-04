import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { handleDiscount } from "../../redux/slices/cart";

const Checkout = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state: RootState) => state.cart.basket)
    const discount = useSelector((state: RootState) => state.cart.discount)
    
    var totalPrice = basket.reduce(function (r, a) {
        return r + Number(a.price) * a.count;

    }, 0);


    const handlePostPayment = () => {
        const newObj = {
            ...basket,
            totalPrice: discount ? totalPrice * 0.8 : totalPrice
        }
        localStorage.setItem('cart', (JSON.stringify(newObj)))
    }
    return (
        <div className="fixed w-1/3 my-3 h-80 rounded-lg right-0 border flex flex-col items-center border-gray-100 bg-white shadow-md">
            <span>{totalPrice}</span>
            {discount && <span>İndirimli Fiyat: {totalPrice * 0.8}</span>}
            {discount && <span className="text-red-800">%20 indirim uygulanmıştır</span>}
            <button onClick={() => dispatch(handleDiscount({ totalPrice }))}>İndirim </button>
            <button onClick={handlePostPayment}>Ödeme Yap </button>

        </div>
    )
}

export default Checkout;