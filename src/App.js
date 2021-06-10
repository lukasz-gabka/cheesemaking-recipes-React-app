import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Content from './components/content';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>

        <Route path="/logowanie">
          <Login />
        </Route>

        <Route path="/rejestracja">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
