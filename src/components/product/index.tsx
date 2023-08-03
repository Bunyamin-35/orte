import { useSelector } from "react-redux"
import { RootState } from "../../redux/reducers"
import Card from "../card"

const Product = () => {

    const data = useSelector((state: RootState) => state.product.data)

    const productList = () => {
        const product = [];

        for (const [key, value] of Object.entries(data.products[0])) {
            product.push(
                <Card
                    name={key}
                    stock={(value as any).stock}
                    description={(value as any).description}
                    img={(value as any).img}
                    price={(value as any).price}
                    size={(value as any).size}
                    key={key}
                />
            )
        }
        return product
    }
    return (
        <div className="w-4/5 flex justify-center items-center mx-auto">
            <div className="grid grid-cols-3">
                {productList()}
            </div>
        </div>

    )
}

export default Product