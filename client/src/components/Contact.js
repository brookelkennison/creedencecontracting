import React, { Component } from 'react';
import '../style/contact.css';
import '../index.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}
	render() {
		return (
			<div className='Contact'>
				<div className='transitionBlock'></div>
				<div className='sectionHeader' id='contactHeader'>
					<h2>CONTACT</h2>
				</div>
				<div id='contactMain'>
					<h3 id='formHeader'>Please fill out this form</h3>
					<p>and we will reach out as soon as possible.</p>
					<form>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Your Name*</label>
								<input type='text' />
							</div>
							<div className='formColumn'>
								<label>Your Phone*</label>
								<input type='text' />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Your Email*</label>
								<input type='text' />
							</div>
							<div className='formColumn'>
								<label>Your Zip Code*</label>
								<input type='text' />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>How can we help you?</label>
								<input type='text' id='textbox' />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Preference of contact*</label>
								<div id='preferenceOptions'>
									<div className='option'>
										<input type='checkbox' />
										<label>Phone</label>
									</div>
									<div className='option'>
										<input type='checkbox' />
										<label>Email</label>
									</div>
									<div className='option'>
										<input type='checkbox' />
										<label>No Preference</label>
									</div>
								</div>
							</div>
						</div>
						<div className='formRow'>
							<input type='submit' value='SEND' id='submitButton' />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
