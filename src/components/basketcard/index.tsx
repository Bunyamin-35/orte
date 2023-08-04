


interface ICart {
    img: string;
    size: string;
    price: number
    name: string
    count: number
    total: number
}

const BasketCard = ({ img, size, price, name, count, total }: ICart) => {

    return (
        <div className="relative my-3 flex w-2/3 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 my-3 flex h-60 overflow-hidden rounded-xl" href="#" rel="noopener noreferrer"
            >
                <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5 w-full">
                <a href="#" rel="noopener noreferrer"
                >
                    <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <span className="text-base font-bold ">adet: {count}</span>
                    <p>
                        <span className="text-3xl font-bold text-slate-900">{total}₺</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BasketCard