const path = require('path');
const express = require('express');
const app = express();
const { sendEmail } = require('./contact');

const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.json());
app.use(express.urlencoded());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/api/contact', function (req, res) {
	res.set('Content-Type', 'application/json');
	sendEmail(req.body);
	res.send();
});

app.get('/api/contact', function (req, res) {});
