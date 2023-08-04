import { useSelector } from "react-redux"
import Product from "../../components/product"
import Modal from "../../components/modal"
import { RootState } from "../../redux/reducers"


const Home = () => {
    return (
        <>
            <Modal />
            <Product />
        </>
    )
}

export default Home