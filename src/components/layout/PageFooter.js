import React from 'react';
import { Footer, FooterSection, FooterLinkList } from "react-mdl";


function PageFooter() {
    return (
        <Footer size="mini">
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
        
    )
}

export default PageFooter;
