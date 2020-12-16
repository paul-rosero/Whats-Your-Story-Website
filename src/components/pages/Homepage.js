import React, { Component } from 'react';

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <img 
                    src="/marisol.jpg"
                    alt="avatar"
                    className="profile-avatar"
                    height="400px"
                /> 
                <h2>Marisol's Homepage</h2>
                
            </div>
        )
    }
}

export default Homepage;
