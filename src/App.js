import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeRoute from './components/route/homeRoute';
import PublicRoute from './components/route/publicRoute';
import Navbar from './components/navbar/navbar';
import HomePublic from './components/home/homePublic';
import HomePrivate from './components/home/homePrivate';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import ReactNotification from 'react-notifications-component';
import authenticate from './scripts/authentication';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchData = async () => {
    const result = await authenticate();
    setIsAuthenticated(result);
    setLoading(false);
  };

  useEffect(() => {
        fetchData();
    }, []);

  return (
    loading ? (
      <div>WCZYTYWANIE...</div>
    ) : (
      <>
      <ReactNotification />
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />      
        <Switch>
          <HomeRoute exact path="/" fetchData={fetchData} isAuthenticated={isAuthenticated} componentAuth={HomePrivate} componentUnauth={HomePublic} />
          <PublicRoute exact path="/logowanie" fetchData={fetchData} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}  component={Login} redirectTo={"/"} />
          <PublicRoute exact path="/rejestracja" fetchData={fetchData} isAuthenticated={isAuthenticated} component={Register} redirectTo={"/"} />
        </Switch>
        <Footer />
      </Router>
      </>
    )
  );
}

export default App;
