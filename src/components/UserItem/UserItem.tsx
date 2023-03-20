import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/interfaces";
import "./userItem.css";

type UserItemProps = {
  user: IUser;
};

export const UserItem = ({ user }: UserItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="userItem__block"
      onClick={() => navigate(`/user-profile/${user.id}`)}
    >
      <div className="img__container">
        <img src={user.avatarUrl} alt={user.firstName} />
      </div>
      <div className="text__container">
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.department}</p>
      </div>
    </div>
  );
};
