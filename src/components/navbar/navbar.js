import '../../stylesheets/navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../../images/logo.png';
import NavbarPrivate from './navbarPrivate';
import NavSectionPrivate from './navSectionPrivate';
import NavSectionPublic from './navSectionPublic';

const Navigation = ({isAuthenticated}) => (
    <Navbar className="px-3 navigation" expand="md" >
        <NavbarBrand>
            <Link to="/" >
                <Image fluid className="logo" src={logo} alt=""/>
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
);

export default Navigation;