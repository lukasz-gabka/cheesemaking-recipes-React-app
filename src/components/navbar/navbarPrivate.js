import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarPrivate = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/notatki">
                Przeglądaj notatki
            </Nav.Link>
        </Nav>
    );
}

export default NavbarPrivate;