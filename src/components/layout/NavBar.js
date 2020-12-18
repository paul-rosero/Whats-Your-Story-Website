import React from 'react';
import { Nav, Navbar, Col, Row } from 'react-bootstrap';

function NavBar() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md">
                <Row className="navbar-brand" md={ 2 } >
                    <Col >
                        <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold", fontSize: "1.4em", textAlign: "center", background: "rgb(236,108,107)", fontFamily: "'Overlock', cursive"}}>
                            Marisol Peña
                            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "medium", padding: "6px 0px ", marginBottom: "0px" }}>Story Teller</p>
                        </Navbar.Brand>
                    </Col>
                </Row>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navbar-links" id="responsive-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="/my-story" style={{color: "white"}}>My Story</Nav.Link>
                        <Nav.Link href="/merch" style={{color: "white"}}>Merch</Nav.Link>
                        <Nav.Link href="/podcast" style={{color: "white"}}>Podcast</Nav.Link>
                        <Nav.Link href="/contact" style={{color: "white"}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    <div className="navbar-icons">
                    {/* Facebook Icon */}
                        <a 
                            href="https://www.facebook.com/whatsyourstory20/?view_public_for=104717851264048" 
                            target="_blank" rel="noopener noreferrer" 
                            style={{ color: "white", marginLeft: ".75em", marginRight: ".75em", fontSize: "1.4em"}}><i className="fab fa-facebook"/>
                        </a>
                    {/* Instagram Icon */}
                        <a 
                            href="https://www.instagram.com/whats_your_story/" 
                            target="_blank" rel="noopener noreferrer" 
                            style={{ color: "white", marginLeft: ".75em", marginRight: ".75em", fontSize: "1.4em"}}><i className="fab fa-instagram-square"/>
                        </a>
                    {/* Twitter Icon */}
                        <a 
                            href="https://twitter.com/itsbubbies17" 
                            target="_blank" rel="noopener noreferrer" 
                            style={{ color: "white", marginLeft: ".75em", marginRight: ".75em", fontSize: "1.4em"}}><i className="fab fa-twitter-square"/>
                        </a>
                    {/* Youtube Icon */}
                        <a 
                            href="https://www.youtube.com/channel/UCwzlZ-VlonDgJjNWwz9OoUA?view_as=subscriber" 
                            target="_blank" rel="noopener noreferrer" 
                            style={{ color: "white", marginLeft: ".75em", marginRight: ".75em", fontSize: "1.4em"}}><i className="fab fa-youtube-square"/>
                        </a>
                    </div>
            </Navbar>
        </header>
    )
}

export default NavBar;