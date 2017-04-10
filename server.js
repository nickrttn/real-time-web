const http = require('http');
const express = require('express');
const io = require('socket.io');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const server = new http.Server(app);
const socket = io(server);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use('/assets', express.static('build'));

app.get('/', (req, res) => {
	res.render('pages/index');
});

socket.on('connection', stream => {
	stream.on('chat message', msg => {
		console.log('received: ', msg);
	});
});

server.listen(app.get('port'), err => {
	if (err) throw chalk.red(err); // eslint-disable-line curly
	console.log(chalk.blue(`----- Listening on http://localhost:${app.get('port')} -----`));
});
