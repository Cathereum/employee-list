import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FetchError } from "../FetchError/FetchError";
import { SearchError } from "../SearchError/SearchError";
import { Skeleton } from "../Skeleton/Skeleton";
import { UserItem } from "../UserItem/UserItem";
import "./userList.css";
import { fetchUsers } from "./userSlice";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const department = useAppSelector((state) => state.categories.department);
  const sortName = useAppSelector((state) => state.sortModal.sortName);
  const inputValue = useAppSelector((state) => state.header.inputValue);

  useEffect(() => {
    dispatch(fetchUsers({ department, sortName }));
  }, [department, dispatch, sortName]);

  console.log(department);
  console.log(sortName);

  const allUsers = users.users
    .filter((user) => {
      if (
        user.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(inputValue.toLowerCase()) ||
        user.phone.toLowerCase().includes(inputValue.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((user) => <UserItem key={user.id} user={user} />);

  return (
    <>
      {users.loading &&
        [...new Array(4)].map((_, index) => <Skeleton key={index} />)}
      {!users.loading && users.error ? (
        <div className="networkError">
          Network error: {users.error}
          <FetchError />
        </div>
      ) : null}
      {allUsers.length > 0 || users.loading ? allUsers : <SearchError />}
    </>
  );
};
