import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../interfaces/interfaces";

type InitialState = {
  loading: boolean;
  users: IUser[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (params: string | any) => {
    const { department, sortName } = params;

    const departmentURL = department ? `department=${department}` : "";

    const response = await axios.get<IUser[]>(
      `https://63673e2979b0914b75dd4830.mockapi.io/Collection?${departmentURL}&sortBy=${sortName}`
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.users = [];
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
