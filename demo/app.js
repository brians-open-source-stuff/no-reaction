'use strict';

const welcomeMessage = n.render(
	`<h1>Hello!</h1>
	<p>This is a demo of <strong>{{this.name}}</strong>.</p>
	<button class="testButton">Click me!</button>`,
	{
		name: 'No Reaction'
	}
);

n.d('body').innerHTML = welcomeMessage;

n.d('.testButton').on('click', (element) => {
	console.info('You clicked', element.target);
});
