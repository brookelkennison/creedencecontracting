import React, { Component } from 'react';
import '../style/header.css';
import '../index.css';
import logo from '../assets/logo.jpg';

class Header extends Component {
	constructor(props) {
		super(props);
		this.scroll = this.scroll.bind(this);
	}
	scroll(event) {
		const name = event.target.name;
		let num = 0;
		if (name === 'about') {
			num = 790;
		} else if (name === 'services') {
			num = 1550;
		} else if (name === 'contact') {
			num = 2680;
		}
		this.props.scroll(event, num);
	}

	render() {
		return (
			<div className='Header'>
				<div id='header'>
					<div id='logo'>
						<img src={logo} alt='Logo' onClick={this.scroll} name='home' />
					</div>
					<div className='nav'>
						<a href='' onClick={this.scroll} name='about'>
							ABOUT
						</a>
						<a href='' onClick={this.scroll} name='services'>
							SERVICES
						</a>
						<a href='' onClick={this.scroll} name='contact'>
							CONTACT
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
