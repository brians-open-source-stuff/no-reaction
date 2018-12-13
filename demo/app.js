'use strict';

const welcomeMessage = z.render(
	`<h1>Hello!</h1>
	<p>This is a demo of <strong>{{this.name}}</strong>.</p>`,
	{
		name: 'ZeroJS'
	}
);

z.d('body').innerHTML = welcomeMessage;
