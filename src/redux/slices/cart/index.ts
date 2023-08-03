import { createSlice } from '@reduxjs/toolkit';



interface ICart {
    basket: Array<any>
}



const initialState: ICart = {
    basket: []

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddProduct: (state, action) => {
            const temp = { ...action.payload }
            const isExist = state.basket.find((item) => item.name === temp.name
            )
            if (isExist) {
                isExist.count += 1
            } else {
                temp.count = 1
                state.basket.push(temp)
            }
        }

    },


});

export const { handleAddProduct } = cartSlice.actions;
export default cartSlice.reducer;



