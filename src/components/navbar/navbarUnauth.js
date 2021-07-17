import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarUnauth = (props) => {
    return (
        <>
            <Nav.Link as={Link} to="/logowanie">
                Logowanie
            </Nav.Link>
            <Nav.Link as={Link} to="/rejestracja">
                Rejestracja
            </Nav.Link>
        </>
    );
}

export default NavbarUnauth;