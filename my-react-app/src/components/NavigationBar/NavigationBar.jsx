import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactLogo from '../../Pages/HomePage/react.svg';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={ReactLogo}
                        alt="Logo"
                        height="60"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/users-list">Users List</Nav.Link>
                        <Nav.Link as={Link} to="/users/create-user">Create new user</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavigationBar;
