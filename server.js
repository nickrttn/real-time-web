const express = require('express');
const chalk = require('chalk');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use('/assets', express.static('build'));

app.listen(app.get('port'), err => {
	if (err) throw chalk.red(err); // eslint-disable-line curly
	console.log(chalk.blue(`----- Listening on http://localhost:${app.get('port')} -----`));
});
