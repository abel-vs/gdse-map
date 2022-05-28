import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href={process.env.PUBLIC_URL  + "/"}>
                        GDSE Culture Map
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link href={process.env.PUBLIC_URL  + "/"}>Home</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL  + "/about"}>About</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL  + "/map"}>Map</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL  + "/hofstede"}>Hofstede Cultural Dimensions</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL  + "/references"}>References</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>);
    }
}

export default NavBar;