import { combineReducers } from 'redux';
import cart from './slices/cart';
import product from './slices/product';

const rootReducer = combineReducers({
    cart,
    product
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;