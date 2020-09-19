import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { toggleCartHidden } from './cart/cart.action';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});