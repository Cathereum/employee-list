import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  department: string;
  activCategory: number;
};

const initialState: InitialState = {
  department: "",
  activCategory: 0,
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: initialState,
  reducers: {
    setCategoryName: (state, action: PayloadAction<string>) => {
      state.department = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activCategory = action.payload;
    },
  },
});

export const { setCategoryName, setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
