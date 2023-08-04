import { useSelector } from "react-redux"
import Product from "../../components/product"
import Modal from "../../components/modal"
import { RootState } from "../../redux/reducers"


const Home = () => {

    const modal = useSelector((state: RootState) => state.cart.modal)



    return (
        <>
            {modal && <Modal />}
            <Product />
        </>
    )
}

export default Home