import React, { createContext, useState } from 'react';
import { useContext } from 'react';


const auth = createContext();
const SingleFile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div>
    <auth.Provider value={{ isLoggedIn, login, logout }}>
      <NavBar />
      <Content />
    </auth.Provider>
    </div>
  );
};

const NavBar = () => {
  const { isLoggedIn, login, logout } = useContext(auth);
  return (
    <div>
      <h1>Welcome to Our Site!</h1>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

const Content = () => {
  const { isLoggedIn } = useContext(auth);
  return (
    <div>
      {isLoggedIn ? <p>You are logged in and can see this content.</p> : <p>Please log in to see the content.</p>}
    </div>
  );
};

export default SingleFile;
