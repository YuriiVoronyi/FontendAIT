import { createSlice } from "@reduxjs/toolkit";

interface IState {
    totalPrice: number,
    items: { id: string, count: number, price: number }[]
}

const initialState: IState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id 
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0
            );
        }
    }
})