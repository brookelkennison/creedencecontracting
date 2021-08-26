import React, { Component } from 'react';
import '../style/about.css';
import '../index.css';
import about from '../assets/about.jpg';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="sectionHeader">
                    <h2>ABOUT</h2>
                </div>
                <div id="aboutMain">
                    <img src={about} alt="Grill Patio" />
                    <div>
                        <h3>Committed</h3>
                        <h4>We are committed to customer satisfaction.</h4>
                        <h3>Reliable</h3>
                        <h4>Our word is your guarantee.</h4>
                        <h3>Effective</h3>
                        <h4>We will do what it takes.</h4>
                        <h3>Efficient</h3>
                        <h4>Good time management.</h4>
                        <h3>Determined</h3>
                        <h4>We are determined to provide quality.</h4>
                    </div>
                </div>
                <div id="aboutParagraph">
                    <div>
                        <div className="block1"></div>
                        <div className="block2"></div>
                    </div>
                    <p>
                        <strong>
                            Cheap Labor isn’t Skilled, Skilled labor isn’t
                            cheap.{' '}
                        </strong>{' '}
                        By investing into our company to complete your project,
                        you are investing into a quality product, without any
                        shortcuts taken, to bring you the best possible end
                        result. We will not compete with contractors who offer
                        cheap labor and a sub par product. We will not sell jobs
                        by offering the lowest bid. We are trademarked by skill,
                        quality, and workmanship and will back our work with
                        customer satisfaction.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
