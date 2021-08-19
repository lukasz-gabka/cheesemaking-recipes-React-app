import { NavbarBrand, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NavSectionPrivate from './navSectionPrivate';
import NavSectionPublic from './navSectionPublic';
import NavbarPrivate from './navbarPrivate';

function Navigation({isAuthenticated}) {
    return (
        <Navbar className="px-3" bg="light" variant="light" expand="md" >
            <NavbarBrand>
                <Link to="/" >
                    <img className="logo" src={logo} alt=""/>
                </Link>
            </NavbarBrand>

            <Navbar.Toggle />
            <Navbar.Collapse 
                className={isAuthenticated ? "justify-content-between" : "justify-content-end"}
            >
                {isAuthenticated && <NavbarPrivate />}
                <Nav>
                    {isAuthenticated ? (
                        <NavSectionPrivate />
                    ) : (
                        <NavSectionPublic />
                    )}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Navigation;