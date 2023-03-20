import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Categories } from "../Categories/Categories";
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
        <h1 className="header-title">ПОИСК</h1>
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
