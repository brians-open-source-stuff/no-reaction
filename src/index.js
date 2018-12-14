import render from './lib/render';
import { d, D } from './lib/querySelector';

'use strict';

function noreact() {

}

window.n = noreact;

noreact.render = render;
noreact.d = d;
noreact.D = D;