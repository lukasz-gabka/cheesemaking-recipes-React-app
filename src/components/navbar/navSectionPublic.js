import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavSectionPublic = () => (
    <>
        <Nav.Link 
            className="mx-1 navButton" 
            as={NavLink} 
            activeClassName="navButtonActive" 
            to="/logowanie"
        >
            Logowanie
        </Nav.Link>

        <Nav.Link 
            className="mx-1 navButton" 
            as={NavLink} 
            activeClassName="navButtonActive" 
            to="/rejestracja"
        >
            Rejestracja
        </Nav.Link>
    </>
);

export default NavSectionPublic;