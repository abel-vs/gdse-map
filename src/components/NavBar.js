import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './NavBar.module.css'

const menuData = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/map",
        title: "Map"
    },
    {
        href: "/hofstede",
        title: "Cultural Dimensions"
    },
    {
        href: "/about",
        title: "About"
    },
    {
        href: "/references",
        title: "References"
    },
]

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
                    <img src="earth.png" alt="logo" className={styles.logo} />
                    GDSE Culture Map
                </Navbar.Brand>
                <Nav >
                    {menuData.map((menu, index) => (
                        <Nav.Link
                            key={index}
                            href={process.env.PUBLIC_URL + menu.href}
                            className={menu.href.split("/").pop() === window.location.pathname.split("/").pop() ? styles.selected : ''}
                        >{menu.title}</Nav.Link>))
                    }
                </Nav>
            </Container>
        </Navbar>);

}

export default NavBar;