export const event = function (type, listener, options) {
	if (options === null)
		options = { 'passive': true };
	if (this instanceof Array)
		this.map(el => {
			if (options == null)
				options = { 'passive': true };
			if (el instanceof Element)
				el.addEventListener(type, listener, options);
		});
	else
		this.addEventListener(type, listener, options);
	return this;
};
