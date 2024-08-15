import { useContext } from "react";
import { auth } from "./auth";
const Content = () => {
    const { isLoggedIn } = useContext(auth);
  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in and can see this content.</p>
      ) : (
        <p>Please log in to see the content.</p>
      )}
    </div>
  );
};

export default Content;
