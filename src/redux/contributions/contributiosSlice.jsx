import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weeks: null,
    data: null,
    test: 'test'
};


export const contributionsSlice = createSlice({
    name: "contributions",
    initialState,
    reducers: {
        setWeeks: (state, action) => {
            state.weeks = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { setWeeks, setData } = contributionsSlice.actions;
export default contributionsSlice.reducer;