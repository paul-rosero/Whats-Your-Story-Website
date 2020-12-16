import React from 'react';
import { Nav, Navbar, Col, Row } from 'react-bootstrap';

function NavBar() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md">
                <Row className="navbar-brand" md={ 2 } >
                    <Col >
                        <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold", fontSize: "1.2em", textAlign: "center" }}>
                            Marisol Pena
                            <p style={{ fontSize: "small"}}>Story Teller</p>
                        </Navbar.Brand>
                    
                        
                    </Col>
                </Row>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto navbar-links">
                        <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="/my-story" style={{color: "white"}}>My Story</Nav.Link>
                        <Nav.Link href="/merch" style={{color: "white"}}>Merch</Nav.Link>
                        <Nav.Link href="/podcast" style={{color: "white"}}>Podcast</Nav.Link>
                        <Nav.Link href="/contact" style={{color: "white"}}>Contact</Nav.Link>
                    </Nav>
                    <Nav className="navbar-icons">
                        <Nav.Link href="" style={{color: "white"}}><i className="fab fa-facebook"/></Nav.Link>
                        <Nav.Link href="" style={{color: "white"}}><i className="fab fa-instagram-square"/></Nav.Link>
                        <Nav.Link href="" style={{color: "white"}}><i className="fab fa-twitter-square"/></Nav.Link>
                        <Nav.Link href="" style={{color: "white"}}><i className="fab fa-youtube-square"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavBar;