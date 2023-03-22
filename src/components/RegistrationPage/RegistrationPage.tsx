import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import "./registrationPage.css";
import { setLogin } from "./registrationPageSlice";

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  const loginHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mail.trim() !== "" && password.trim() !== "") {
      dispatch(setLogin(true));
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="page__wrapper">
      <form onSubmit={loginHandler} className="page__content">
        <h1>Введите Email и Password</h1>
        <input
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          type="mail"
          placeholder="E-mail"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
        />
        {formError && (
          <p className="form__error">Пожалуйста, заполните все поля формы</p>
        )}
        <button className="loginBtn">Войти в приложение</button>
      </form>
    </div>
  );
};
