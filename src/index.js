import render from './lib/render';
import { d, D } from './lib/querySelector';
import { event } from './lib/events';

'use strict';

function noreact() {

}

window.n = noreact;

noreact.render = render;
noreact.d = d;
noreact.D = D;

NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.on = event;
HTMLElement.prototype.on = event;
Document.prototype.on = event;
