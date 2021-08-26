import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (
    <footer>
        <Navbar className="justify-content-center py-3 navigation">
            &copy; Notatnik Serowarski {new Date().getFullYear()}
        </Navbar>
    </footer>
);

export default Footer;