import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  sortName: string;
  modalStatus: boolean;
  activSortCategory: number;
};

const initialState: InitialState = {
  sortName: "firstName",
  modalStatus: false,
  activSortCategory: 0,
};

export const sortModalSlice = createSlice({
  name: "categoriesSlice",
  initialState: initialState,
  reducers: {
    setSortName: (state, action: PayloadAction<string>) => {
      state.sortName = action.payload;
    },
    changeModalStatus: (state) => {
      state.modalStatus = !state.modalStatus;
    },
    setActiveSortCategory: (state, action) => {
      state.activSortCategory = action.payload;
    },
  },
});

export const { setSortName, changeModalStatus, setActiveSortCategory } =
  sortModalSlice.actions;
export default sortModalSlice.reducer;
