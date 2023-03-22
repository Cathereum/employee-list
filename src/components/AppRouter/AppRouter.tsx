import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Main from "../Main/Main";
import { RegistrationPage } from "../RegistrationPage/RegistrationPage";
import { UserProfile } from "../UserPrifile/UserProfile";

export const AppRouter = () => {
  const login = useAppSelector((state) => state.login.login);

  return login ? (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
      <Route path="/*" element={<Navigate to="/main" />} />
    </Routes>
  ) : (
    <RegistrationPage />
  );
};
