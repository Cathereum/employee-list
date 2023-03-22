import "./skeleton.css";
import Ellipse from "./Ellipse.png";
import sk1 from "./sk1.png";
import sk2 from "./sk2.png";

export const Skeleton = () => {
  return (
    <div className="userItem__block">
      <div className="img__container">
        <img src={Ellipse} alt={"loading"} />
      </div>
      <div className="text__container">
        <img src={sk1} alt={"loading"} />
        <img src={sk2} alt={"loading"} />
      </div>
    </div>
  );
};
