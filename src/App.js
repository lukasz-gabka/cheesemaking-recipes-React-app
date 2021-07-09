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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <MainRoute exact path="/" componentAuth={Main} componentUnauth={Invitation} />
        <UnauthRoute exact path="/logowanie" component={Login} redirectTo={"/"} />
        <UnauthRoute exact path="/rejestracja" component={Register} redirectTo={"/"} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
