import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./userProfile.css";
import { fetchUniqUser } from "./userProfileSlice";
import navigateIcon from "./navigate.svg";
import star from "./star.svg";
import tel from "./tel.svg";

export const UserProfile = () => {
  const dispatch = useAppDispatch();
  const uniqUser = useAppSelector<IUser>((state) => state.uniqUser.uniqUser);

  const params = useParams<string>();

  useEffect(() => {
    dispatch(fetchUniqUser(params.id));
  }, []);

  console.log(params.id);

  return (
    <>
      <div className="profile__header">
        <Link to="/main">
          <img className="nav-icon" src={navigateIcon} alt="" />
        </Link>
        <div className="profile__header-content">
          <img src={uniqUser.avatarUrl} alt={uniqUser.firstName} />
          <h1>
            {uniqUser.firstName} {uniqUser.lastName}
          </h1>
          <h3>{uniqUser.department}</h3>
        </div>
      </div>
      <div className="profile__userInfo">
        <div>
          <div className="age__block">
            {uniqUser.birthday}
            <img className="age-icon" src={star} alt="" />
          </div>
          <div className="phone__block">
            {uniqUser.phone}
            <img className="phone-icon" src={tel} alt="" />
          </div>
        </div>
        <div className="total__age">Age</div>
      </div>
    </>
  );
};
