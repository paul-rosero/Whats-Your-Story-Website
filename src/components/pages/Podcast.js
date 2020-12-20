import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Podcast extends Component {
    render() {
        return (
            <div>
                <Row className="container" style={{ padding: "0px", margin: "0px"}}>
                    <Col xs={ 12 } md={ 6 } style={{ backgroundColor: "rgb(236,108,107)" }}>
                        <div style={{ color: "white", padding: "30px 30px 40px 30px" }}>
                            <h1 style={{ fontWeight: "bolder" }}>Podcast</h1>
                            <p style={{ fontWeight: "bold" }}>So you've held on and kept searching through my page! Awesome. 😊 Down below Is a list of all my episodes thus far. Shop around, and if you see anything you like, click on it and take a listen. Make sure to let me know what you think. (If you don't mind of course)</p>
                        </div>
                    </Col>
                    <Col xs={ 12 } md={ 6 } style={{ backgroundColor: "white"}}>
                    </Col>
                </Row>
                    <div style={{ position: "relative", margin:
                    "-20px 20px 10px 20px"}}>
                        <iframe title="Podcast" id="player_iframe" src="https://www.buzzsprout.com/1082117?client_source=large_player&amp;amp;iframe=true" scrolling="no" width="100%" height="380" frameBorder="2"></iframe>
                    </div>
            </div>
        )
    }
}

export default Podcast;