import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/gdse-map">
                        GDSE Culture Map
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link href="/gdse-map">Home</Nav.Link>
                        <Nav.Link href="/gdse-map/map">Map</Nav.Link>
                        <Nav.Link href="/gdse-map/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>);
    }
}

export default NavBar;