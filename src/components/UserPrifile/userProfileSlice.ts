import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../interfaces/interfaces";

type InitialState = {
  loading: boolean;
  uniqUser: IUser;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  uniqUser: {
    id: "",
    avatarUrl: "",
    firstName: "",
    lastName: "",
    userTag: "",
    department: "",
    position: "",
    birthday: "",
    phone: "",
  },
  error: "",
};

export const fetchUniqUser = createAsyncThunk(
  "user/fetchUniqUser",
  async (id: string | undefined) => {
    const response = await axios.get<IUser>(
      `https://63673e2979b0914b75dd4830.mockapi.io/Collection/${id}`
    );
    return response.data;
  }
);

export const userProfileSlice = createSlice({
  name: "userProfileSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUniqUser.pending, (state) => {
      state.loading = true;
      state.uniqUser = initialState.uniqUser;
    });
    builder.addCase(
      fetchUniqUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.uniqUser = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUniqUser.rejected, (state, action) => {
      state.loading = false;
      state.uniqUser = initialState.uniqUser;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userProfileSlice.reducer;
