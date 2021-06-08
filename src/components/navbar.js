import { Nav, NavbarBrand } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logo.png';

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <NavbarBrand>
                <img className="logo" src={logo} alt=""/>
            </NavbarBrand>

            <Navbar.Collapse className="justify-content-end">
                <Nav.Link>Logowanie</Nav.Link>
                <Nav.Link>Rejestracja</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;