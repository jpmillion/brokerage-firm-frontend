import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './features/user/Login';
import './App.css';
import { authenticate } from './features/user/userAPI';

function App() {
  useEffect(() => {
    if (sessionStorage.token) authenticate();
  })

  return (
    <div>
      <Router>
          <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
