import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        GDSE Culture Map
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/map">Map</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>);
    }
}

export default NavBar;