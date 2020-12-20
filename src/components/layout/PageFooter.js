import React from 'react';
import { Footer, FooterSection, FooterLinkList } from "react-mdl";


function PageFooter() {
    return (
        <Footer size="mini" style={{ background: "rgb(40,43,130)", color: "white" }}>
            <FooterSection type="left" logo="What's Your Story?">
                <FooterLinkList>  
                    <a href="/">Home</a>
                    <p style={{margin: 0, padding: 0}}>This website was created By Paul Rosero.</p>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    )
}

export default PageFooter;
