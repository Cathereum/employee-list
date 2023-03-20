import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./sortModal.css";
import {
  changeModalStatus,
  setActiveSortCategory,
  setSortName,
} from "./sortModalSlice";

const categoriesList = [
  { sortName: "firstName", sortTitle: "По алфавиту" },
  { sortName: "birthday", sortTitle: "По дню рождения" },
];

export const SortModal = () => {
  const dispatch = useAppDispatch();
  const sortModal = useAppSelector((state) => state.sortModal);

  const changeSortCategory = (sortName: string, index: number) => {
    dispatch(setActiveSortCategory(index));
    dispatch(setSortName(sortName));
    dispatch(changeModalStatus());
  };

  return (
    <div
      onClick={() => dispatch(changeModalStatus())}
      className={sortModal.modalStatus ? "myModal" : "modalDisabled myModal "}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="myModal__content"
      >
        <h1>Сортировка</h1>
        {categoriesList.map((sortCat, index) => (
          <button
            key={sortCat.sortTitle}
            onClick={() => changeSortCategory(sortCat.sortName, index)}
            className={
              sortModal.activSortCategory === index
                ? "sort__btn active"
                : "sort__btn"
            }
          >
            {sortCat.sortTitle}
          </button>
        ))}
      </div>
    </div>
  );
};
