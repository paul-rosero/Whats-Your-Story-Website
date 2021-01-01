import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import marisol2 from "../../images/marisol2.jpeg";
import whatsYourStory from "../../images/whatsyourstory-icon.jpg";
import editingPodcast from "../../images/editing_podcast.jpeg";
import podcastEquipment from "../../images/podcast_equipment.jpg"
import { EmailForm } from '../Forms'; 


const allImages = [
    { src: whatsYourStory, alt: "whatsyourstory-icon" },
    { src: editingPodcast, alt: "editing_podcast" },
    { src: podcastEquipment, alt: "podcast-equipment" },
    { src: marisol2, alt: "marisol2" }
]

const RenderImages = allImages.map( ({ src, alt }, index) => {
    return <Col key={ index } >
        <Image style={{ objectFit: "cover", margin: "0", height: "100%", width: "100%", borderRadius: "0px", borderWidth: "2px", borderColor: "rgb(40, 43, 130)", borderStyle: "solid", transition: "none 0s ease 0s"}} src={ src } alt={ alt } fluid />
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
                    <Col >
                        
                    </Col>
                    <Col>
                        <EmailForm/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;