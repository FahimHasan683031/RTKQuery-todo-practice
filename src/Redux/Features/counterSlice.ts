import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decriment: (state) => {
      state.count = state.count - 1;
    },

    incrimentByValu: (state, actions: PayloadAction<number>) => {
      state.count += actions.payload;
    },
  },
});

export const { increment, decriment, incrimentByValu } = counterSlice.actions;

export default counterSlice.reducer;
