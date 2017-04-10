const io = require('socket.io-client');

(function () {
	'use strict';
	const socket = io();
	const form = document.querySelector('form');
	const msg = document.querySelector('#message');
	const msgs = document.querySelector('#messages');

	form.addEventListener('submit', () => {
		socket.emit('chat message', msg.value);
	});

	socket.on('chat message', msg => {
		msgs.insertAdjacentHTML('beforeend', `<li>${msg}</li>`);
	});
})();
