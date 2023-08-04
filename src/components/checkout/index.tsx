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
        alert("Ödeme gerçekleştirilmiştir.")
        localStorage.setItem('cart', (JSON.stringify(newObj)))
    }
    return (
        <div className="fixed w-1/3 my-3 h-80 rounded-lg right-0 border flex flex-col items-center border-gray-100 bg-white shadow-md">
            <span>Toplam Fiyat :{totalPrice} ₺</span>
            {discount && <span>İndirimli Fiyat: {totalPrice * 0.8} ₺</span>}
            {discount && <span className="text-red-800">%20 indirim uygulanmıştır</span>}
            {discount ? <button className="flex items-center my-3 justify-center rounded-md bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" disabled={true} onClick={() => dispatch(handleDiscount({ totalPrice }))}>İndirim </button>:<button className="flex items-center justify-center rounded-md cursor-pointer my-3 bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={() => dispatch(handleDiscount({ totalPrice }))}>İndirim </button>}
            <button className="flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-center text-sm my-3 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={handlePostPayment}>Ödeme Yap </button>
        </div>
    )
}

export default Checkout;