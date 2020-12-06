import React, { Component } from 'react';
import '../style/about.css';
import '../index.css';
import aboutGrill from '../assets/aboutGrill.jpg';


class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="sectionHeader">
                    <h2>ABOUT</h2>
                </div>
                <div id="aboutMain">
                    <img src={aboutGrill} alt="Grill Patio"/>
                    <div>
                        <h3>Committed</h3>
                        <h4>We are committed to customer satisfaction.</h4>
                        <h3>Reliable</h3>
                        <h4>Our word is your guarantee.</h4>
                        <h3>Efficient</h3>
                        <h4>Good time management.</h4>
                        <h3>Effective</h3>
                        <h4>We will do what it takes.</h4>
                        <h3>Determined</h3>
                        <h4>We are determined to provide quality.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;