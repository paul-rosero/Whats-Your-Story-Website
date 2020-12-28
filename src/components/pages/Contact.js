import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import marisol2 from "../../images/marisol2.jpeg";
import whatsYourStory from "../../images/whatsyourstory-icon.jpg";
import editingPodcast from "../../images/editing_podcast.jpeg";

const allImages = [
    { id: 1, src: marisol2, alt: "marisol2" },
    { id: 2, src: whatsYourStory, alt: "whatsyourstory-icon" },
    { id: 3, src: editingPodcast, alt: "editing_podcast" }
]

const RenderImages = allImages.map( ({ id, src, alt }) => {
    return <Col key={ id } xs={ 6 } md={ 4 }>
        <Image style={{ objectFit: "cover", bottom: "auto", margin: "0px", height: "300px", width: "100%", borderRadius: "0px", borderWidth: "2px", borderColor: "rgb(40, 43, 130)", borderStyle: "solid", transition: "none 0s ease 0s"}} src={ src } alt={ alt } fluid />
    </Col>
})

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <Row style={{ padding: "10px 0px"}} className="contact-images"> 
                    { RenderImages }
                </Row> 
                <Row style={{ backgroundColor: "rgb(40,43,130)" }}>
                    <Col xs={ 8 } md={ 9 }>
                        <h3>hello1</h3>
                    </Col>
                    <Col xs={ 4 } md={ 3 }>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;