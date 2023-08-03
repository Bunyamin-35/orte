import { createSlice } from '@reduxjs/toolkit';



interface IProduct {
    onder:string
}



const initialState: IProduct = {
    onder:"asdas"

};

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },


});

export const { } = productSlice.actions;
export default productSlice.reducer;



