import React, { Component } from 'react';
import '../style/services.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import steps from '../assets/services/steps.jpg';
import polebarn from '../assets/services/polebarn.jpg';
import services1 from '../assets/services/services1.jpg';
import poolPatio from '../assets/services/poolPatio.jpg';
import services4 from '../assets/services/services4.jpg';
import services5 from '../assets/services/services5.jpg';
import services6 from '../assets/services/services6.jpg';
import house from '../assets/services/house.jpg';
import entrance from '../assets/services/entrance.jpg';

class Services extends Component {
	render() {
		return (
			<div className='Services'>
				<div className='transitionBlock'></div>
				<div className='sectionHeader' id='servicesHeader'>
					<h2>SERVICES</h2>
				</div>
				<div id='servicesMain'>
					<Carousel>
						<Carousel.Item>
							<img className='d-block' src={house} alt='house' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={entrance} alt='house entrance' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={steps} alt='cement steps' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={polebarn} alt='polebarn' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={services1} alt='fence' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={poolPatio} alt='pool patio' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={services4} alt='indoor stairs' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={services5} alt='shower' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block' src={services6} alt='outdoor stairs' />
						</Carousel.Item>
					</Carousel>
					<div id='carouselExampleControls' class='carousel slide' data-ride='carousel'></div>
				</div>
				<div id='servicesParagraph'>
					<p>
						<strong>Creedence Contracting LLC</strong> is an Independent Contracting Company with over 10 years of experience. Our company specializes in Outdoor Structures such as Custom
						Decks, Gazebos, Pergolas, Recreational Areas, Porches, Sun Rooms, Post Framed Buildings and Garages. We also have years of experience in New Construction, Remodeling, Interior
						and Exterior Finish, Metal Roofing, Custom Trim, Tile and so much more. We handle every project with knowledge and expertise and will stop at nothing to build you the best.
					</p>
					<div>
						<div className='block1'></div>
						<div className='block2' id='servicesBlock'></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
