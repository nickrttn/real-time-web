const io = require('socket.io-client');

(function () {
	'use strict';
	const socket = io();
	const form = document.querySelector('form');
	const msg = document.querySelector('#message');

	form.addEventListener('submit', () => {
		socket.emit('chat message', msg.value);
	});
})();
