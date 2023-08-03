import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { handleAddProduct } from "../../redux/slices/cart";



interface ICart {
    img: string;
    size: string;
    price: string
    name: string
    count:number
    total:number
}

const BasketCard = ({ img, size,price,name,count,total}: ICart) => {
    //const dispatch = useDispatch();
    //const count = useSelector((state: RootState) => state.cart.count)

    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <h1>Cart Page</h1>
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <span className="text-base font-bold ">stok: {""}</span>
                    <p>
                        <span className="text-3xl font-bold text-slate-900">{total}₺</span>
                    </p>
                </div>
                
            </div>


        </div>
    )
}
export default BasketCard