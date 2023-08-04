import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import BasketCard from "../basketcard";
const Basket = () => {

    const basket = useSelector((state: RootState) => state.cart.basket)


    return (
        <>
            <div className="w-full flex-col justify-center items-center">
                <div className="grid grid-cols-1">
                    {basket.map((item, key) =>{
                        console.log('price',item.count*Number(item.price),item.count,Number(item.price))
                        return(
                        <BasketCard
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            size={item.size}
                            count={item.count}
                            total = {item.count*Number(item.price)}
                            key={key}
                        />)})}
                </div>
            </div>
        </>
    )
}

export default Basket;