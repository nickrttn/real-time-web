const io = require('socket.io-client');

(function () {
	'use strict';
	const socket = io();
	const form = document.querySelector('form');
	const name = document.querySelector('#name');
	const msg = document.querySelector('#message');
	const msgs = document.querySelector('#messages');

	form.addEventListener('submit', evt => {
		// Send the message to the server over a WebSocket connection
		socket.emit('chat message', {
			name: name.value,
			msg: msg.value
		});

		// Don't do an actual GET or POST
		evt.preventDefault();

		// Clear the chat field
		msg.value = '';

		// Scroll the messages list down
		msgs.scrollTop = msgs.scrollHeight;
	});

	socket.on('chat message', msg => {
		msgs.insertAdjacentHTML('beforeend', `
			<li data-type="message" data-self=${name.value === msg.name} ?>
				${msg.msg}
				<span data-type="sender">${msg.name}</span>
			</li>`
		);
	});
})();
