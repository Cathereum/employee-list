import { Header } from "../Header/Header";
import { SortModal } from "../SortModal/SortModal";
import { UserList } from "../UserList/UserList";

function Main() {
  return (
    <>
      <div className="container">
        <Header />
        <UserList />
        <SortModal />
      </div>
    </>
  );
}

export default Main;
