import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCookie } from "../../scripts/cookies";
import { LOGOUT, LOGOUT_SUCCESS, showNotification, STATUS_GREEN } from "../../scripts/notifications";

const NavbarAuth = (props) => {
        const logout =() => {
        deleteCookie();
        showNotification(LOGOUT, LOGOUT_SUCCESS, STATUS_GREEN);
    }

    return (
        <Nav.Link as={Link} to="/" onClick={() => logout()}>
            Wyloguj
        </Nav.Link>
    );
}

export default NavbarAuth;