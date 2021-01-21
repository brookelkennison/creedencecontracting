const mailjet = require('node-mailjet').connect('161ba37b8ac65c1be7c6e18c52896f2a', '46b0a816df421be1f62864a34c830072');

function sendEmail() {
	return mailjet
		.post('send', { version: 'v3.1' })
		.request({
			Messages: [
				{
					From: {
						Email: 'brookelkennison@gmail.com',
						Name: 'Brooke',
					},
					To: [
						{
							Email: 'kennisoncreative@gmail.com',
							Name: 'Test',
						},
					],
					TemplateID: 2226328,
					TemplateLanguage: true,
					Subject: 'Test Email',
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

module.exports = sendEmail;
