import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../../constants';



interface IProduct {
    data: any
}



const initialState: IProduct = {
    data: data

};

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },


});

export const { } = productSlice.actions;
export default productSlice.reducer;



