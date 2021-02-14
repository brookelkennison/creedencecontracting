import React, { Component } from 'react';
import '../style/contact.css';
import '../index.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.getContactPreference = this.getContactPreference.bind(this);
		this.state = {
			nameContact: '',
			phone: '',
			email: '',
			zipcode: '',
			message: '',
			checkboxPhone: false,
			checkboxEmail: false,
			checkboxNoPreference: false,
		};
	}
	handleCheckbox(checkbox) {
		this.setState({
			[checkbox]: !this.state[checkbox],
		});
	}
	handleChange(event, inputField) {
		this.setState({
			[inputField]: event.target.value,
		});
	}
	getContactPreference() {
		let contactPreference = 'no preference';
		if (this.state.checkboxEmail && this.state.checkboxPhone) {
			return contactPreference;
		} else if (this.state.checkboxEmail) {
			return (contactPreference = 'email');
		} else if (this.state.checkboxPhone) {
			return (contactPreference = 'phone');
		}
		return contactPreference;
	}
	handleSubmit() {
		const payload = {
			nameContact: this.state.nameContact,
			phone: this.state.phone,
			email: this.state.email,
			zipcode: this.state.zipcode,
			message: this.state.message,
			contactPreference: this.getContactPreference(),
		};
		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(() => {
				window.location = '/';
				console.log('Data has been sent to the server');
			})
			.catch(() => {
				console.log('Internal server error');
			});
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
					<form onSubmit={this.handleSubmit}>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Your Name*</label>
								<input type='text' name='nameContact' value={this.state.nameContact} onChange={(event) => this.handleChange(event, 'nameContact')} />
							</div>
							<div className='formColumn'>
								<label>Your Phone*</label>
								<input type='tel' name='phone' value={this.state.phone} onChange={(event) => this.handleChange(event, 'phone')} />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Your Email*</label>
								<input type='text' name='email' value={this.state.email} onChange={(event) => this.handleChange(event, 'email')} />
							</div>
							<div className='formColumn'>
								<label>Your Zip Code*</label>
								<input type='text' name='zipcode' value={this.state.zipcode} onChange={(event) => this.handleChange(event, 'zipcode')} />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>How can we help you?</label>
								<textarea type='textarea' id='textbox' name='message' value={this.state.message} onChange={(event) => this.handleChange(event, 'message')} />
							</div>
						</div>
						<div className='formRow'>
							<div className='formColumn'>
								<label>Preference of contact*</label>
								<div id='preferenceOptions'>
									<div className='option'>
										<input type='checkbox' name='checkboxPhone' onChange={() => this.handleCheckbox('checkboxPhone')} value={this.state.checkboxPhone} />
										<label>Phone</label>
									</div>
									<div className='option'>
										<input type='checkbox' name='checkboxEmail' onChange={() => this.handleCheckbox('checkboxEmail')} value={this.state.checkboxEmail} />
										<label>Email</label>
									</div>
									<div className='option'>
										<input type='checkbox' name='checkboxNoPreference' onChange={() => this.handleCheckbox('checkboxNoPreference')} value={this.state.checkboxNoPreference} />
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
