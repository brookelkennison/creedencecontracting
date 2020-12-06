import React, { Component } from 'react';
import '../style/services.css';
import '../index.css';

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <div className="transitionBlock"></div>
                <div className="sectionHeader" id="servicesHeader">
                    <h2>SERVICES</h2>
                </div>
                <div id="servicesMain">
                    
                </div>
                <div id="servicesParagraph">
                <p><strong>Creedence Contracting LLC</strong> is an Independent Contracting Company with over 10 years of experience. Our company specializes in Outdoor Structures such as Custom Decks, Gazebos, Pergolas, Recreational Areas, Porches, Sun Rooms, Post Framed Buildings and Garages. We also have years of experience in New Construction, Remodeling, Interior and Exterior Finish, Metal Roofing, Tile and much more. By investing into my company, you are investing into a quality product, without any shortcuts taken, to bring you the best possible end result. I will not compete with contractors who offer cheap labor and a sub par product. We are trademarked by skill, quality, and workmanship and will back our work with customer satisfaction.</p>
                <div>
                    <div className="block1"></div>
                    <div className="block2" id="servicesBlock"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Services;