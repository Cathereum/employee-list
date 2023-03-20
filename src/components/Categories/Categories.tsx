import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./categories.css";
import { setActiveCategory, setCategoryName } from "./categoriesSlice";

const categoriesList = [
  { department: "", category: "Все" },
  { department: "android", category: "Android" },
  { department: "ios", category: "iOS" },
  { department: "design", category: "Дизайн" },
  { department: "management", category: "Менеджмент" },
  { department: "qa", category: "QA" },
  { department: "back_office", category: "Бэк-офис" },
  { department: "frontend", category: "Frontend" },
  { department: "hr", category: "HR" },
  { department: "pr", category: "PR" },
  { department: "backend", category: "Backend" },
  { department: "support", category: "Техподдержка" },
  { department: "analytics", category: "Аналитика" },
];
export const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  const changeActivCategory = (department: string, index: number) => {
    dispatch(setActiveCategory(index));
    dispatch(setCategoryName(department));
  };

  return (
    <nav>
      <ul className="navigation__block">
        {categoriesList.map((category, index) => (
          <li
            onClick={() => changeActivCategory(category.department, index)}
            className={
              categories.activCategory === index ? "activ__category" : ""
            }
            key={category.department}
          >
            {category.category}
          </li>
        ))}
      </ul>
    </nav>
  );
};
