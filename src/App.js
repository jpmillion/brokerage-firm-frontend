import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './features/user/Login';
import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
