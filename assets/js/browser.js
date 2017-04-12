const io = require('socket.io-client');

(function () {
	'use strict';
	const socket = io();
	const form = document.querySelector('form');
	const msg = document.querySelector('#message');
	const msgs = document.querySelector('#messages');

	form.addEventListener('submit', (evt) => {
		socket.emit('chat message', msg.value);
		evt.preventDefault();
		form.reset();
	});

	socket.on('chat message', msg => {
		msgs.insertAdjacentHTML('beforeend', `<li>${msg}</li>`);
	});
})();
