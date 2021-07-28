import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavSectionPublic = (props) => {
    return (
        <>
            <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/logowanie">
                Logowanie
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="NavLinkActive" to="/rejestracja">
                Rejestracja
            </Nav.Link>
        </>
    );
}

export default NavSectionPublic;