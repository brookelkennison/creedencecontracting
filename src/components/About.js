import React, { Component } from 'react';
import '../style/about.css'
import '../index.css'
import arrowTransition from '../assets/arrowTransition.jpg';


class About extends Component {
    render() {
        return (
            <div className="About">
                <img src={arrowTransition}></img>
            </div>
        )
    }
}

export default About;