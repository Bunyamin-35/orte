import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal } from "../../redux/slices/cart";
import { RootState } from "../../redux/reducers";
import Card from "../card";

const Modal = () => {
    const show = useSelector((state: RootState) => state.cart.modal)
    const selectedProduct: any = useSelector((state: RootState) => state.cart.selectedProduct)

    const dispatch = useDispatch();
    if (show)
        return (
            <div className="fixed w-full h-full flex justify-center  overflow-y-hidden bg-black bg-opacity-80 items-center">
                <div className="bg-white border rounded flex flex-col items-center  w-3/5 h-3/5 z-20">
                    <span className="w-full flex justify-end p-1 text-2xl font-bold cursor-pointer " onClick={() => dispatch(handleCloseModal({}))} >X</span>
                    <div className="w-full">
                        <Card
                            modal={true}
                            name={selectedProduct.name}
                            stock={selectedProduct.stock}
                            description={selectedProduct.description}
                            img={selectedProduct.img}
                            price={selectedProduct.price}
                            size={selectedProduct.size}
                        />
                    </div>
                    <span onClick={() => dispatch(handleCloseModal({}))} className="text-red-700 cursor-pointer"> Alışverişe Devam Et</span>
                    <Link to={"/cart"} onClick={() => dispatch(handleCloseModal({}))} className="text-red-700"> Sepete Git</Link>
                </div>
            </div>
        )
    else {
        return (<></>)
    }

}

export default Modal;