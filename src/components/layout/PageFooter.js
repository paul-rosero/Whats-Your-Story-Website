import React from 'react';
import { Container, Row } from 'react-bootstrap';

function PageFooter() {
    return (
        <Container>
            <Row style={{ contentAlign: "center", background: "rgb(40,43,130)", color: "white", padding: "1vmax", justifyContent: "center" }}>
                <p>&copy; {new Date().getFullYear()} Copyright: Created by <a style={{ fontSize: "2.5vh" }} href="https://paul-rosero-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">Paul Rosero</a>.</p>
            </Row>
        </Container>    
    )
}

export default PageFooter;
