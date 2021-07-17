import { NavbarBrand } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NavbarAuth from './navbarAuth';
import NavbarUnauth from './navbarUnauth';

function Navigation(props) {
    const {isAuthenticated} = props;

    return (
        <Navbar bg="light" variant="light">
            <NavbarBrand>
                <Link to="/">
                    <img className="logo" src={logo} alt=""/>
                </Link>
            </NavbarBrand>

            <Navbar.Collapse className="justify-content-end">
                {isAuthenticated ? (
                    <NavbarAuth />
                ) : (
                    <NavbarUnauth />
                )}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;