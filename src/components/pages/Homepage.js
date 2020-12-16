import React, { Component } from 'react';
import Marisol from "../../images/marisol.jpg"

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <img 
                    src={ Marisol }
                    alt="avatar"
                    className="profile-avatar"
                    height="500px"
                /> 
                <h2>Marisol's Homepage</h2>
                
            </div>
        )
    }
}

export default Homepage;
