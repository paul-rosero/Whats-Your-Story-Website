import React from 'react';
import { Footer, FooterSection, FooterLinkList } from "react-mdl";


function PageFooter() {
    return (
        <Footer size="mini" style={{ background: "rgb(40,43,130)" }}>
            <FooterSection type="left" logo="logo">
                <FooterLinkList>
                    <a href="/">Help</a>
                    <a href="/">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        
    )
}

export default PageFooter;
