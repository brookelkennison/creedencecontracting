import React, { Component } from 'react';
import '../style/slogan.css';
import '../index.css';
import arrowTransition from '../assets/arrowTransition.jpg';

class Slogan extends Component {
	render() {
		return (
			<div className='Slogan'>
				<div>
					<h1>"Competing with the best to build you the best"</h1>
					<h3>Proudly serving Northeast Indiana and surrounding areas.</h3>
				</div>
				<img src={arrowTransition} alt='arrowTransition' className='scrollToAbout' ref={this.props.refProp} />
			</div>
		);
	}
}

export default Slogan;
