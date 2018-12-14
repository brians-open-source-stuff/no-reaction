'use strict';

const welcomeMessage = n.render(
	`<h1>Hello!</h1>
	<p>This is a demo of <strong>{{this.name}}</strong>.</p>`,
	{
		name: 'No Reaction'
	}
);

n.d('body').innerHTML = welcomeMessage;
