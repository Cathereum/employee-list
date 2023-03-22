import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Categories } from "../Categories/Categories";
import { setLogin } from "../RegistrationPage/registrationPageSlice";
import { changeModalStatus } from "../SortModal/sortModalSlice";
import "./header.css";
import { changeInputValue } from "./headerSlice";
import sortIcon from "./listuialt.svg";
import search from "./search.svg";

export const Header = () => {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector((state) => state.header.inputValue);

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="header-title">ПОИСК</div>
          <button
            onClick={() => dispatch(setLogin(false))}
            className="loginBtn"
          >
            Выйти
          </button>
        </div>

        <img className="searchIcon" src={search} alt="search" />
        <input
          value={inputValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value))}
          className="header__input"
          type="text"
          placeholder="Введите имя, тег, почту..."
        />
        <img
          onClick={() => dispatch(changeModalStatus())}
          className="sortIcon"
          src={sortIcon}
          alt="hui"
        />
        <Categories />
      </header>
    </div>
  );
};
