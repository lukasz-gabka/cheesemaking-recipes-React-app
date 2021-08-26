import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarPrivate = () => (
    <Nav>
        <NavDropdown className="mx-1 navButton" title="Notatki">
            <Nav.Link 
                className="mx-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/notatki"
            >
                Przeglądaj notatki
            </Nav.Link>

            <Nav.Link 
                className="m-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/dodaj-notatki"
            >
                Dodaj notatkę
            </Nav.Link>

            <Nav.Link 
                className="m-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/usun-notatki"
            >
                Usuń notatki
            </Nav.Link>

            <Nav.Link 
                className="m-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/modyfikuj-notatki"
            >
                Modyfikuj notatki
            </Nav.Link>
        </NavDropdown>

        <NavDropdown className="mx-1 navButton" title="Szablony">
            <Nav.Link 
                className="m-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/wykaz-szablonow"
            >
                Wykaz szablonów
            </Nav.Link>

            <Nav.Link 
                className="m-1 navButton" 
                as={NavLink} 
                activeClassName="navButtonActive" 
                to="/dodaj-szablon"
            >
                Dodaj szablon
            </Nav.Link>
        </NavDropdown>
    </Nav>
);

export default NavbarPrivate;