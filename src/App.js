import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login/login';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
import Preferences from './components/Preferences/preferences';
import useToken from './useToken';

function App() 
{
  const { token, setToken } = useToken();

  if (!token) { return <Login setToken= { setToken } /> }
    
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/dashboard"> <Dashboard> </Route> and so on */}
          <Route exact path="/" component= { Login } />
          <Route exact path="/login" component= { Login } />
          <Route exact path="/home" component= { Home } />
          
          <Route exact path="/dashboard" component= { Dashboard } />
          <Route exact path="/preferences" component = { Preferences } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;