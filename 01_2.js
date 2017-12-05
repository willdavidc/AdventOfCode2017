'use strict';
const fs    = require('fs');
const input = fs.readFileSync('./inputs/01.txt').toString();

const result = input
    .split('')
    .reduce((sum, val, i) => sum + (val === input[(i + input.length / 2) % input.length] ? +val : 0), 0);

console.log(result);