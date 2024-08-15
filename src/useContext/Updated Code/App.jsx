import { useState } from 'react';
// import NavBar from '../src/useContext/Updated Code/navbar';
// import Content from '../src/useContext/Updated Code/Content';
// import { auth } from '../src/useContext/Updated Code/auth';
import SingleFile from './SingleFile';

export const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const login = () => setIsLoggedIn(true);
  // const logout = () => setIsLoggedIn(false);

  return (
    <div>
      {/* <auth.Provider value={{ isLoggedIn, login, logout }}>
        <NavBar />
        <Content />
      </auth.Provider> */}
      <SingleFile />
    </div>
  );
};

export default App;

