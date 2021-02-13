import React, { Component } from 'react';
import '../style/services.css';
import '../index.css';
import steps from '../assets/services/steps.jpg';
import polebarn from '../assets/services/polebarn.jpg';
import porch from '../assets/services/porch.jpg';
import poolPatio from '../assets/services/poolPatio.jpg';
import poolPatio2 from '../assets/services/poolPatio2.jpg';
import porch2 from '../assets/services/porch2.jpg';
import shower from '../assets/services/shower.jpg';

class Services extends Component {
	render() {
		return (
			<div className='Services'>
				<div className='transitionBlock'></div>
				<div className='sectionHeader' id='servicesHeader'>
					<h2>SERVICES</h2>
				</div>
				<div id='servicesMain'>
					<div className='column'>
						<img src={polebarn} alt='polebarn' />
						<img src={steps} alt='steps' />
					</div>
					<div className='column'>
						<img src={poolPatio} alt='pool patio' />
						<img src={porch} alt='porch' />
					</div>
					<div className='column'>
						<img src={poolPatio2} alt='pool patio' />
						<img src={shower} alt='shower' />
					</div>
					<div className='column' id='column4'>
						<img src={porch2} alt='porch' />
					</div>
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
