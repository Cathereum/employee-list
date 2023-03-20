import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import { UserProfile } from "../UserPrifile/UserProfile";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
      <Route path="/*" element={<Navigate to="/main" />} />
    </Routes>
  );
};
