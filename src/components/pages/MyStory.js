import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import whatsYourStory from "../../images/whatsyourstory-icon.jpg";

class MyStory extends Component {
    render() {
        return (
            <div className="container" style={{ background: "white"}}>
                <Row>
                    <Col xs={ 12 } md={ 6 } style={{ backgroundColor: "rgb(236,108,107)", color: "white", textAlign: "center" }}>
                    <div style={{ padding: "30px 20px" }}>
                        <h2 style={{ fontSize: "7vw", fontWeight: "bolder", padding: "20px 0px" }}>My Story</h2>
                        <p style={{ fontSize: "1.5vw", padding: "20px 0px" }}>I’ve learned that sharing life experiences has the ability to bring people together and create a common bond. My name is Marisol Peña, Creator of What’s your story? And I invite you to join in my journey as I navigate my life and share I have learned. In each episode, I share with you MY personal experience, in hopes that you can find some parallels in, and get something out of it. Whatever hurdles we have, whatever pain we endure, whatever obstacles get in our way, we will get through them, together. So, tap play, and let’s start from the beginning shall we? </p>
                    </div>
                    </Col>
                    <Col xs={ 12 } md={ 6 } style={{ backgroundColor: "white", padding: "80px 30px" }}>
                        <img
                            src={ whatsYourStory }
                            alt="whats-your-story-icon"
                            width="100%"
                            height="auto"
                        ></img>
                    </Col>
                </Row>
                <Row style={{ maxWidth: "100%", height: "auto", margin: "-60px 300px 30px 50px", backgroundColor: "white", borderRadius: "8px", borderWidth: "2px", borderColor: "rgb(40, 43, 130)", borderStyle: "solid", position: "relative" }}>
                    <div className="middle-div" style={{ wordWrap: "break-word" }}>
                        <p style={{ fontSize: "4vw", color: "rgb(40, 43, 130)", padding: "30px", lineHeight: "90px" }}>"Everyday is a new day. So let's make this one count."</p>
                    </div>
                </Row>
                <Row style={{ backgroundColor: "white", margin: "90px 30px 0px 30px", padding: "0px 20px 40px 20px" }}>
                    <div>
                        <h2 style={{ color: "rgb(40, 43, 130)", fontWeight: "bold"}}>My Mission</h2>
                        <p>My mission is to share my life experiences with you in hopes that you will recognize that you are not alone. That your struggles are relevant. I can only aspire to enrich your life through parallels.</p>
                        <Button href="/podcast" style={{ background: "rgb(236,108,107)" }}>Listen Here</Button>
                    </div>
                </Row>
            </div>
        )
    }
}

export default MyStory;

