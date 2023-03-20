import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  inputValue: string;
};

const initialState: InitialState = {
  inputValue: "",
};

export const headerSlice = createSlice({
  name: "headerSlice",
  initialState: initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { changeInputValue } = headerSlice.actions;
export default headerSlice.reducer;
