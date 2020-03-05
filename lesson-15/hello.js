"use strict";
//функция require загружает модуль: модуль - это объект с набором методов поэтому в переменную мы сохраняем ссылку на него
const fs = require("fs");
const os = require("os");

const rand = Math.floor(Math.random() * 3);
let text = "";
if(rand === 0) {
    text = "Hello World";
} else if(rand === 1) {
    text = "Hey there";
} else if(rand === 2) {
    text = "What's up?";
}

console.log(text);
const content = fs.readFileSync("./test.txt");

fs.writeFileSync("./test.txt", content + "\n" + text); //данной строкой мы говорим чтоб функция генирировала новый файл в текст формате и записывает туда
                                            // значение переменной text которое будет выводиться рандомно
const data = {text, createdAt: new Date()};
fs.writeFileSync("./test.json", JSON.stringify(data)); //создает файл json

fs.writeFileSync("./cpu-info.json", JSON.stringify(os.cpus()));
console.log(os.cpus());

