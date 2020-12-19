import React, { Component } from 'react';
import '../style/footer.css';
import '../index.css';
import facebookIcon from '../assets/facebookIcon.png';
import logo from '../assets/logo.jpg';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}
	render() {
		return (
			<div className='Footer'>
				<div className='transitionBlock'></div>
				<div id='footerMain'>
					<div className='footerColumn' id='location'>
						<img src={facebookIcon} alt=' ' />
						<p>North Manchester, Indiana</p>
					</div>
					<div className='footerColumn' id='copyright'>
						<h3>THIS IS OUR CREED</h3>
						<h4>#CreedenceContractingLLC</h4>
						<p>Copyright 2020 Kennison Creative - All Rights Reserved</p>
					</div>
					<div className='footerColumn'>
						<img src={logo} alt='logo' id='footerLogo' />
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
