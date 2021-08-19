import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarPrivate = () => {
    return (
        <Nav>
            <NavDropdown title="Notatki">
                <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/notatki">
                    Przeglądaj notatki
                </Nav.Link>

                <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/dodaj-notatki">
                    Dodaj notatkę
                </Nav.Link>

                <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/usun-notatki">
                    Usuń notatki
                </Nav.Link>

                <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/modyfikuj-notatki">
                    Modyfikuj notatki
                </Nav.Link>
            </NavDropdown>

            <NavDropdown title="Szablony">
                <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/wykaz-szablonow">
                    Wykaz szablonów
                </Nav.Link>
            </NavDropdown>
        </Nav>
    );
}

export default NavbarPrivate;