"use strict"

const fs = require("fs");
//загрузка собственного модуля
const helpers = require("./helpers");

console.log(helpers);

const n = helpers.randomInt(10, 20);
console.log(n);

console.log(helpers.dateFormat(new Date()));

console.log("test");