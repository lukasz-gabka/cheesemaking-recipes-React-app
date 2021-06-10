import { Nav, NavbarBrand } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <NavbarBrand>
                <Link to="/">
                    <img className="logo" src={logo} alt=""/>
                </Link>
            </NavbarBrand>

            <Navbar.Collapse className="justify-content-end">
                <Nav.Link>
                    <Link to="/logowanie">Logowanie</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/rejestracja">Rejestracja</Link>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;