import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalQuantity: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const itemInCart = state.cartItems.find((item) => item.id === newItem.id)
            if (itemInCart) {
                itemInCart.quantity++;
                itemInCart.totalPrice += newItem.price

            } else {
                state.cartItems.push({ ...action.payload, quantity: 1, totalPrice: newItem.price });
                state.totalQuantity++
            }
        },
        handleIncrement(state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload)
            item.quantity++
            item.totalPrice += item.price
        },
        handleDecrement(state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
                item.totalPrice -= item.price
            }
        }, 
        removeFromCart(state ,action){
            const removeItem = state.cartItems.filter((item)=>item.id !== action.payload)
            state.cartItems=removeItem
            state.totalQuantity --
        }


    }
})
export const { addToCart, handleIncrement, handleDecrement ,removeFromCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer;
