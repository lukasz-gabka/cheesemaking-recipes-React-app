import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainRoute from './components/mainRoute';
import AuthRoute from './components/authRoute';
import UnauthRoute from './components/unauthRoute';
import Navbar from './components/navbar';
import Invitation from './components/invitation';
import Main from './components/main';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import ReactNotification from 'react-notifications-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <>
      <ReactNotification />
      <Router>
      <Navbar />
      <Switch>
        <MainRoute exact path="/" componentAuth={Main} componentUnauth={Invitation} />
        <UnauthRoute exact path="/logowanie" component={Login} redirectTo={"/"} />
        <UnauthRoute exact path="/rejestracja" component={Register} redirectTo={"/"} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
