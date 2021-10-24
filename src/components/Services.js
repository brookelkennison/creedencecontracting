import React, { Component } from 'react';
import '../style/services.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import steps from '../assets/services/steps.jpg';
import polebarn2 from '../assets/services/polebarn2.jpg';
import polebarn from '../assets/services/polebarn.jpg';
import services1 from '../assets/services/services1.jpg';
import poolPatio from '../assets/services/poolPatio.jpg';
import patio from '../assets/services/patio.jpg';
import services5 from '../assets/services/services5.jpg';
import services6 from '../assets/services/services6.jpg';
import house from '../assets/services/house.jpg';
import entrance from '../assets/services/entrance.jpg';
import shower from '../assets/services/shower.jpg';
import deck from '../assets/services/deck.jpg';
import deck2 from '../assets/services/deck2.jpg';
import patio2 from '../assets/services/patio2.jpg';
import stairs from '../assets/services/stairs.jpg';
import stairs2 from '../assets/services/stairs2.jpg';
import frontEntry from '../assets/services/frontEntry.jpg';

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <div className="transitionBlock"></div>
                <div className="sectionHeader" id="servicesHeader">
                    <h2>SERVICES</h2>
                </div>
                <div id="servicesMain">
                    {/* <ControlledCarousel /> */}
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block" src={deck} alt="deck" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={deck2} alt="deck" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={house} alt="house" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={shower}
                                alt="shower"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={patio} alt="patio" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                id="patio2"
                                src={patio2}
                                alt="patio"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={entrance}
                                alt="house entrance"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={polebarn2}
                                alt="polebarn"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={steps}
                                alt="cement steps"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={polebarn}
                                alt="polebarn"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={services1}
                                alt="fence"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={poolPatio}
                                alt="pool patio"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={stairs}
                                alt="stairs"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={stairs2}
                                alt="stairs"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={frontEntry}
                                alt="front entry"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={services5}
                                alt="shower"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={services6}
                                alt="outdoor stairs"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div id="servicesParagraph">
                    <p>
                        <strong>Creedence Contracting LLC</strong> is an
                        Independent Contracting Company with over 10 years of
                        experience. Our company specializes in Outdoor
                        Structures such as Custom Decks, Gazebos, Pergolas,
                        Recreational Areas, Porches, Sun Rooms, Post Framed
                        Buildings and Garages. We also have years of experience
                        in New Construction, Remodeling, Interior and Exterior
                        Finish, Metal Roofing, Custom Trim, Tile and so much
                        more. We handle every project with knowledge and
                        expertise and will stop at nothing to build you the
                        best.
                    </p>
                    <div>
                        <div className="block1"></div>
                        <div className="block2" id="servicesBlock"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
