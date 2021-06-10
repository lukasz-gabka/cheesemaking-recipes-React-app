import Navbar from './components/navbar';
import Content from './components/content';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}

export default App;
