import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cards: []
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards(state, {payload}) {
            state.cards = payload;
        }
    }
});

export const {setCards} = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;