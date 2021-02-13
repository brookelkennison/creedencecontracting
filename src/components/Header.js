import React, { Component } from 'react';
import '../style/header.css';
import '../index.css';
import logo from '../assets/logo.jpg';
// import executeScroll from '../App';

class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<div id='header'>
					<div id='logo'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='nav'>
						<a href=' ' onClick={this.props.scrollTo}>
							ABOUT
						</a>
						<a href=' '>SERVICES</a>
						<a href=' '>CONTACT</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
