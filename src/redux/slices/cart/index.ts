import { createSlice } from '@reduxjs/toolkit';



interface ICart {
    discount:boolean
    modal:boolean
    basket: Array<any>
    selectedProduct:Object
}



const initialState: ICart = {
    discount:false,
    modal:false,
    basket: JSON.parse(localStorage.getItem("basket") ?? "[]"),
    selectedProduct:{}

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddProduct: (state, action) => {
            const temp = { ...action.payload }
            const isExist = state.basket.find((item) => item.name === temp.name)
            state.selectedProduct=temp
            state.modal =true
            if (isExist) {
                isExist.count += 1
                localStorage.setItem("basket",JSON.stringify(state.basket))
            } else {
                temp.count = 1
                state.basket.push(temp)
                localStorage.setItem("basket",JSON.stringify(state.basket))
            }
        },
        handleCloseModal:(state,action) => {
            state.modal = false
        },
        handleDiscount:(state,action) => {
            state.discount = true
        }
    },


});

export const { handleAddProduct, handleCloseModal, handleDiscount } = cartSlice.actions;
export default cartSlice.reducer;



