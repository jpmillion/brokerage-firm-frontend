import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './features/user/Login';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAuthenticate, logOut, selectLogInStatus } from './features/user/userSlice';
import LogoutGoogle from './features/user/LogoutGoogle';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLogInStatus);

  const handleLogOut = () => {
    sessionStorage.clear();
    dispatch(logOut());
  }

  const logOutButton = <button onClick={handleLogOut} >Log Out</button>;
  
  const displayLogOutButton = () => {
    if (loggedIn) {
      return !!sessionStorage.token ? logOutButton : <LogoutGoogle />;
    }
  }

  useEffect(() => {
    if (sessionStorage.token) dispatch(asyncAuthenticate());
  })

  return (
    <div>
      {displayLogOutButton()}
      <Router>
          <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
