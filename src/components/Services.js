import React, { Component, useState } from 'react';
import '../style/services.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import { images } from './SlideshowImages.js';

const Services = () => {
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
				<div>
					<img src='https://img.icons8.com/ios/50/000000/circled-left-2.png' id='prev-arrow' onClick={() => slider?.current?.slickPrev()} />
				</div>
				<div className='slider-container'>
					<Slider ref={slider} {...settings}>
						{images.map((image) => {
							return (
								<div>
									<img className='d-block' src={image.image} alt='' />
								</div>
							);
						})}
					</Slider>
				</div>
				<div>
					<img src='https://img.icons8.com/ios/50/000000/circled-left-2.png' id='next-arrow' onClick={() => slider?.current?.slickNext()} />
				</div>
			</div>
		</div>
	);
};

export default Services;
