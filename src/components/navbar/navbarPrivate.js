import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarPrivate = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/notatki">
                Przeglądaj notatki
            </Nav.Link>

            <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/dodaj-notatki">
                Dodaj notatkę
            </Nav.Link>
        </Nav>
    );
}

export default NavbarPrivate;