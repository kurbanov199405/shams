"use strict";

//express это не большой фреймворк для разработки веб-сервера на ноде.джс. позволяет обрабатывать http-запросы
//загрузили мы его через npm
const express = require("express");

const app = express();

// если
app.get("/", (req, res) => {
   console.log("Пришел запрос на сервер");
   console.log(new Date());

   res.send("Hello world");
});

app.listen(3000, err => {
    if(err) return console.error("Ошибка запуска сервера");
    console.log("Сервер запущен");
});



