import { useContext } from "react";
import { auth } from "./auth";
const NavBar = () => {
  const { isLoggedIn, login, logout } = useContext(auth);
  return (
    <div>
      <h1>Welcome to Our Site!</h1>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default NavBar;
