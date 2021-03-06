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
import Loading from './components/loading';
import ReactNotification from 'react-notifications-component';
import authenticate from './services/authentication';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import PrivateRoute from './components/route/privateRoute';
import NoteDisplayView from './components/note/noteDisplay/noteDisplayView';
import NoteAddView from './components/note/noteAdd/noteAddView';
import NoteDeleteView from './components/note/noteDelete/noteDeleteView';
import NoteModifyView from './components/note/noteModify/noteModifyView';
import TemplateListView from './components/template/templateList/templateListView';
import TemplateAddView from './components/template/templateAdd/templateAddView';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchData = async () => {
    const result = await authenticate();
    setIsAuthenticated(result);
    await sleep(500);
    setLoading(false);
  };

  const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  useEffect(() => {
    fetchData();
    });

  return (
    loading ? (
      <Loading />
    ) : (
      <>
      <ReactNotification />
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />      
        <Switch>
          <HomeRoute 
            exact path="/" 
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            componentAuth={HomePrivate} 
            componentUnauth={HomePublic} 
          />

          <PublicRoute 
            exact path="/logowanie" 
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
            component={Login} 
            redirectTo="/" 
          />

          <PublicRoute 
            exact path="/rejestracja" 
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={Register} 
            redirectTo="/" 
          />

          <PrivateRoute
            exact path="/notatki"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={NoteDisplayView} 
            redirectTo="/"
          />

          <PrivateRoute
            exact path="/dodaj-notatki"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={NoteAddView} 
            redirectTo="/"
          />

          <PrivateRoute
            exact path="/usun-notatki"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={NoteDeleteView} 
            redirectTo="/"
          />

          <PrivateRoute
            exact path="/modyfikuj-notatki"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={NoteModifyView} 
            redirectTo="/"
          />

          <PrivateRoute
            exact path="/wykaz-szablonow"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={TemplateListView} 
            redirectTo="/"
          />

          <PrivateRoute
            exact path="/dodaj-szablon"
            fetchData={fetchData} 
            isAuthenticated={isAuthenticated} 
            component={TemplateAddView} 
            redirectTo="/"
          />
        </Switch>
        <Footer />
      </Router>
      </>
    )
  );
}

export default App;
