import React, { Component } from 'react';
import '../style/services.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
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
import deck3 from '../assets/services/deck3.jpg';
import patio2 from '../assets/services/patio2.jpg';
import stairs from '../assets/services/stairs.jpg';
import stairs2 from '../assets/services/stairs2.jpg';
import frontEntry from '../assets/services/frontEntry.jpg';
import shower2 from '../assets/services/shower2.jpg';
import polebarn3 from '../assets/services/polebarn3.jpg';
import insideGarage from '../assets/services/insideGarage.jpg';
import aFrame from '../assets/services/aFrame.jpg';
import aFrame2 from '../assets/services/aFrame2.jpg';
import aFramePantry from '../assets/services/aFramePantry.jpg';
import poleBarn4 from '../assets/services/poleBarn4.jpg';

export default function Services() {
	const slider = React.useRef(null);
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		className: 'slider variable-width',
		dots: false,
		centerMode: true,
		centerPadding: 0,
		variableWidth: true,
		variableHeight: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					centerMode: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					infinite: true,
					centerMode: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
				},
			},
		],
	};

	return (
		<div className='Services'>
			<div className='transitionBlock'></div>
			<div className='sectionHeader' id='servicesHeader'>
				<h2>SERVICES</h2>
			</div>
			<div id='servicesMain'>
				{/* <ControlledCarousel /> */}
				{/* <button id='prev-arrow' onClick={() => slider?.current?.slickPrev()}> */}
				<div>
					<img src='https://img.icons8.com/ios/50/000000/circled-left-2.png' id='prev-arrow' onClick={() => slider?.current?.slickPrev()} />
				</div>
				{/* </button> */}
				<div className='slider-container'>
					<Slider ref={slider} {...settings}>
						<div>
							<img className='d-block' src={poleBarn4} alt='poleBarn4' />
						</div>
						<div>
							<img className='d-block' src={aFrame} alt='A-frame' />
						</div>
						<div>
							<img className='d-block' src={aFramePantry} alt='custom pantry' />
						</div>
						<div>
							<img className='d-block' src={aFrame2} alt='a-frame' />
						</div>
						<div>
							<img className='d-block' src={shower2} alt='custom shower' />
						</div>
						<div>
							<img className='d-block' src={polebarn3} alt='polebarn' />
						</div>
						<div>
							<img className='d-block' src={insideGarage} alt='inside garage' />
						</div>
						<div>
							<img className='d-block' src={deck} alt='deck' />
						</div>
						<div>
							<img className='d-block' src={deck2} alt='deck' />
						</div>
						<div>
							<img className='d-block' src={deck3} alt='deck' />
						</div>
						<div>
							<img className='d-block' src={house} alt='house' />
						</div>
						<div>
							<img className='d-block' src={shower} alt='shower' />
						</div>
						<div>
							<img className='d-block' src={patio} alt='patio' />
						</div>
						<div>
							<img className='d-block' id='patio2' src={patio2} alt='patio' />
						</div>
						<div>
							<img className='d-block' src={entrance} alt='house entrance' />
						</div>
						<div>
							<img className='d-block' src={polebarn2} alt='polebarn' />
						</div>
						<div>
							<img className='d-block' src={steps} alt='cement steps' />
						</div>
						<div>
							<img className='d-block' src={polebarn} alt='polebarn' />
						</div>
						<div>
							<img className='d-block' src={services1} alt='fence' />
						</div>
						<div>
							<img className='d-block' src={poolPatio} alt='pool patio' />
						</div>
						<div>
							<img className='d-block' src={stairs} alt='stairs' />
						</div>
						<div>
							<img className='d-block' src={stairs2} alt='stairs' />
						</div>
						<div>
							<img className='d-block' src={frontEntry} alt='front entry' />
						</div>
						<div>
							<img className='d-block' src={services5} alt='shower' />
						</div>
						<div>
							<img className='d-block' src={services6} alt='outdoor stairs' />
						</div>
					</Slider>
				</div>
				<div>
					<img src='https://img.icons8.com/ios/50/000000/circled-left-2.png' id='next-arrow' onClick={() => slider?.current?.slickNext()} />
				</div>
			</div>
		</div>
	);
}
