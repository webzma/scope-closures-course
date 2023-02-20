"use strict"
pi = 3.1416; // Con el modo estricto da error porque no hemos declarado la variable con alguna palabra reservada correspondiente (var, let, const)
console.log(pi);

function myF() {
  'use strict';
  return pi + 1;
}

myF()