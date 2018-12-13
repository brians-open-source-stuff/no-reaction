import render from './lib/render';
import { d, D } from './lib/querySelector';

'use strict';

function zero() {

}

window.z = zero;

zero.render = render;
zero.d = d;
zero.D = D;