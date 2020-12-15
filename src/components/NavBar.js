import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" expand="md">
                <Navbar.Brand href="/" style={{color: "white"}}>What's Your Story</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" style={{color: "white"}}>Homepage</Nav.Link>
                        <Nav.Link href="/bio" style={{color: "white"}}>Bio</Nav.Link>
                        <Nav.Link href="/my-wor" style={{color: "white"}}>My Work</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavBar;