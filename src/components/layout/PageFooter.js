import React from 'react';
import { Footer, FooterSection, FooterLinkList } from "react-mdl";


function PageFooter() {
    return (
        <Footer size="mini" style={{ background: "rgb(40,43,130)", color: "white" }}>
            <FooterSection type="left" logo="logo">
                <FooterLinkList>  
                    <a href="/">Privacy & Terms</a>
                    <p>This website was created By Paul Rosero.</p>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    )
}

export default PageFooter;
