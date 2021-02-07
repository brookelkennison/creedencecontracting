import React, { Component } from 'react';
import '../style/header.css';
import '../index.css';
import logo from '../assets/logo.jpg';

class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div id='header'>
					<div id='logo'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='nav'>
						<a href='about'>ABOUT</a>
						<a href='services'>SERVICES</a>
						<a href='contact'>CONTACT</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
