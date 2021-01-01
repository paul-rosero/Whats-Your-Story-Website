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
    return(
        <Col key={ index } >
            <Image style={{ objectFit: "cover", margin: "0", height: "100%", width: "100%", borderRadius: "0px", borderWidth: "2px", borderColor: "rgb(40, 43, 130)", borderStyle: "solid", transition: "none 0s ease 0s"}} src={ src } alt={ alt } fluid />
        </Col>
    );
})

const allIcons = [
    { href: "https://www.facebook.com/whatsyourstory20/?view_public_for=104717851264048", iTag:"fab fa-facebook" },
    { href:"https://www.instagram.com/whats_your_story/", iTag:"fab fa-instagram-square" },
    { href:"https://twitter.com/itsbubbies17", iTag:"fab fa-twitter-square" },
    { href:"https://www.youtube.com/channel/UCwzlZ-VlonDgJjNWwz9OoUA?view_as=subscriber", iTag:"fab fa-youtube-square" }
]

const renderIcons = allIcons.map(({ href, iTag }, index) => {
    return(
        <a 
            key={ index }
            href={ href } 
            target="_blank" rel="noopener noreferrer" 
            style={{ color: "white", marginRight: ".75em", fontSize: "1.4em" }}><i className={ iTag }/>
        </a>
    );
})

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <Row style={{ padding: "10px 0px"}} className="contact-images"> 
                    { RenderImages }
                </Row> 
                <Row style={{ backgroundColor: "rgb(40,43,130)"}}>
                    <Col sm={ 4 } style={{ margin: "0em 2.5em 0em 2.5em", padding: "2em" }}>
                        <Row style={{ padding: "0em 0em 1em 0em" }}>
                            <h3 style={{ color: "rgb(236,108,107)", fontWeight: "bold" }}>Let's Connect</h3>
                        </Row>
                        <Row style={{ padding: "0em " }}>
                            <a style={{ color: "white" }} href="mailto: itsbubbies17@gmail.com" target="_blank" rel="noopener noreferrer">itsbubbies17@gmail.com</a>
                        </Row>
                        <Row style={{ color: "white", padding: "0em 0em 1em 0em" }}>
                            <p>Phone: 631-855-8955</p>
                        </Row>
                        <Row style={{  padding: "1em 0em " }}>
                            { renderIcons }
                        </Row> 
                    </Col>
                    <Col sm={ 7 }>
                        <EmailForm/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;