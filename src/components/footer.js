import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light" className="justify-content-center py-3">
                &copy; Notatnik Serowarski {new Date().getFullYear()}
            </Navbar>
        </footer>
    )
}

export default Footer;