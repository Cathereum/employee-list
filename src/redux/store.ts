import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../components/Categories/categoriesSlice";
import headerSlice from "../components/Header/headerSlice";
import sortModalSlice from "../components/SortModal/sortModalSlice";
import userSlice from "../components/UserList/userSlice";
import userProfileSlice from "../components/UserPrifile/userProfileSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    categories: categoriesSlice,
    sortModal: sortModalSlice,
    header: headerSlice,
    uniqUser: userProfileSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
