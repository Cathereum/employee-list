import "./searchError.css";
import searchError from "./searchError.svg";

export const SearchError = () => {
  return (
    <div className="SearchError__wrapper">
      <img src={searchError} alt="searchError" />
      <h1>Мы никого не нашли</h1>
      <h2>Попробуй скорректировать запрос</h2>
    </div>
  );
};
