'use strict';

export const d = document.querySelector.bind(document);
export const D = (selector, startNode = document) => [...startNode.querySelectorAll(selector)];
