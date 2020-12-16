import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="/" style={{color: "white"}}>
                    <img
                        src="/whatsyourstory-icon.jpg"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="/my-story" style={{color: "white"}}>My Story</Nav.Link>
                        <Nav.Link href="/merch" style={{color: "white"}}>Merch</Nav.Link>
                        <Nav.Link href="/podcast" style={{color: "white"}}>Podcast</Nav.Link>
                        <Nav.Link href="/contact" style={{color: "white"}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavBar;