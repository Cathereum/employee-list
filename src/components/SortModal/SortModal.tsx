import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./sortModal.css";
import {
  changeModalStatus,
  setActiveSortCategory,
  setSortName,
} from "./sortModalSlice";
import radioBig from "./radioBig.svg";
import radioSmall from "./radioSmall.svg";
import closeModal from "./closeModal.svg";

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
        <img
          onClick={() => dispatch(changeModalStatus())}
          className="close__modal"
          src={closeModal}
          alt="close"
        />
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
            <div className="sortCat">
              {sortCat.sortTitle}
              <div className="selected">
                {sortModal.activSortCategory === index ? (
                  <img src={radioBig} alt="radioBig" />
                ) : (
                  <img src={radioSmall} alt="radioSmall" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
