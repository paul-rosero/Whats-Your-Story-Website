import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Marisol from "../../images/marisol.jpg"

class Homepage extends Component {
    render() {
        return (
            <div className="homepage" style={{ backgroundColor: "rgb(40,43,130)" }}>
                <div className="container">
                    <Row className="second-background">
                        <Col xs={ 12 } md={ 7 } style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px", color: "white" }}>
                            <h1 style={{ fontWeight: "bolder", padding: "20px 20px 40px 20px", fontSize: "8vw" }}>Podcaster</h1>
                            <div style={{ padding: "60px 20px 20px 20px" }}>
                                <p style={{ fontSize: "2.5vw" }}>Sharing real life stories with those willing to listen</p>
                                <Button style={{ background: "rgb(236,108,107)" }}>Work with Me</Button>
                            </div>
                        </Col>
                        <Col xs={ 6 } md={ 5 } style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
                            <img 
                                src={ Marisol }
                                alt="avatar"
                                className="profile-avatar"
                                
                            /> 
                        </Col>
                    </Row>       
                </div>       
            </div>
        )
    }
}

export default Homepage;
