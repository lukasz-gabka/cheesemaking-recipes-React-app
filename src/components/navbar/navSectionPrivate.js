import { deleteCookie } from "../../services/cookies";
import { LOGOUT_SUCCESS, showNotification, STATUS_GREEN, SUCCESS } 
    from "../../services/notifications";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavSectionPrivate = () => {
    const logout =() => {
        deleteCookie();
        showNotification(SUCCESS, LOGOUT_SUCCESS, STATUS_GREEN);
    };

    return (
        <Nav.Link className="navButton logoutButton" as={Link} to="/" onClick={() => logout()}>
            Wyloguj
        </Nav.Link>
    );
}

export default NavSectionPrivate;