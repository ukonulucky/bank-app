import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products : [],
        total: 0
    },
    reducers: {
        addCart: (state, action) => {
            console.log("this is the addCart action", action)
      state.products = [...state.products, action.payload];
           state.total += action.payload.price * action.payload.quantity 
        },
        reset : (state) => {
             state = initialState
        }
    }
})


export const {addCart, reset} = cartSlice.actions

export default cartSlice.reducer