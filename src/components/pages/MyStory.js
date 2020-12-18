import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import whatsYourStory from "../../images/whatsyourstory-icon.jpg";

class MyStory extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col style={{ backgroundColor: "rgb(236,108,107)" }}>
                        <h2>My Story</h2>
                        <h2>Marisol's MyStory Page</h2>
                    </Col>
                    <Col style={{ backgroundColor: "white", padding: "30px 10px" }}>
                        <img
                            src={ whatsYourStory }
                            alt="whats-your-story-icon"
                            fluid
                            width="100%"
                            height="auto"
                        ></img>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MyStory;
