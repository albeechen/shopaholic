import { createSelector } from 'reselect';

const selectUser = state => state.user;

const selectCart = state => state.cart;



export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden

);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0
        )
);