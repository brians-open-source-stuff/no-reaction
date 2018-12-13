'use strict';

const welcomeMessage = z.render(
	`<h1>Hello!</h1>
	<p>This is a demo of <strong>{{this.name}}</strong>.</p>`,
	{
		name: 'ZeroJS'
	}
);

document.getElementsByTagName('body')[0].innerHTML = welcomeMessage;
