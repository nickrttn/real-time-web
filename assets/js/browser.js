const io = require('socket.io-client');

(function () {
	'use strict';
	const socket = io();
	const form = document.querySelector('form');
	const name = document.querySelector('#name');
	const msg = document.querySelector('#message');
	const msgs = document.querySelector('#messages');

	form.addEventListener('submit', evt => {
		socket.emit('chat message', {
			name: name.value,
			msg: msg.value
		});

		evt.preventDefault();
		msg.value = '';
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
