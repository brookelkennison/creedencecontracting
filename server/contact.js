const mailjet = require('node-mailjet').connect('161ba37b8ac65c1be7c6e18c52896f2a', '46b0a816df421be1f62864a34c830072');
// const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

function sendEmail(messageInfo) {
	return mailjet
		.post('send', { version: 'v3.1' })
		.request({
			Messages: [
				{
					From: {
						Email: 'kennisoncreative@gmail.com',
						Name: 'Website Contact Form',
					},
					To: [
						{
							Email: 'jdavis.ccontracting@gmail.com',
							Name: 'Creedence Contracting',
						},
					],
					TemplateID: 2378638,
					TemplateLanguage: true,
					Subject: 'New customer contact form submission',
					Variables: {
						nameContact: messageInfo.nameContact,
						phone: messageInfo.phone,
						email: messageInfo.email,
						zipcode: messageInfo.zipcode,
						message: messageInfo.message,
						contactPreference: messageInfo.contactPreference,
					},
				},
			],
		})
		.then((result) => {
			console.log(result.body);
		})
		.catch((err) => {
			console.log(err.statusCode);
		});
}

module.exports = {
	sendEmail,
};
