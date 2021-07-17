import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCookie } from "../../scripts/cookies";

const NavbarAuth = (props) => {
    return (
        <Nav.Link as={Link} to="/">
            Wyloguj
        </Nav.Link>
    );
}

export default NavbarAuth;