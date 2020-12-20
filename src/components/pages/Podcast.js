import React, { Component } from 'react';

class Podcast extends Component {
    render() {
        return (
            <div>
                <h2>Marisol's Podcast Page</h2>
                <iframe title="Podcast" id="player_iframe" src="https://www.buzzsprout.com/1082117?client_source=large_player&amp;amp;iframe=true" scrolling="no" width="100%" height="370" frameBorder="2"></iframe>
            </div>
        )
    }
}

export default Podcast;