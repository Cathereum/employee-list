import { Link } from "react-router-dom";
import "./fetchError.css";
import fetchError from "./fetchError.svg";

export const FetchError = () => {
  return (
    <div>
      <img src={fetchError} alt="searchError" />
      <h1>Какой-то сверхразум все сломал</h1>
      <h2>Постараемся быстро починить</h2>
      <Link to="./main">Попробовать снова</Link>
    </div>
  );
};
