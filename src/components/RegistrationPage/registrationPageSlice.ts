import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  login: boolean;
};

const initialState: InitialState = {
  login: false,
};

export const registrationSlice = createSlice({
  name: "registrationSlice",
  initialState: initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
  },
});

export const { setLogin } = registrationSlice.actions;
export default registrationSlice.reducer;
