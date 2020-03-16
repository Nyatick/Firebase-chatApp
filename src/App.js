import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Room from './pages/Room';
import firebase from './config/firebaseConfig';
import Auth from './Auth'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user.email)
      } else {
        setUser('')
      }
    });
  }, [])


  return (
    <Router>
      <Switch>
        <Route exact path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/signUp">
          <SignUp></SignUp>
        </Route>
        <Auth>
          <Switch>
            <Route exact path="/">
              <Room></Room>
            </Route>
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
}

export default App;
