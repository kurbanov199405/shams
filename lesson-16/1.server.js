"use strict";

//express это не большой фреймворк для разработки веб-сервера на ноде.джс. позволяет обрабатывать http-запросы
//загрузили мы его через npm
const express = require("express");
const faker = require("faker");
const cors = require("cors");

const app = express();

app.use(cors());

// если
app.get("/", (req, res) => {
   console.log("Пришел запрос на сервер");
   console.log(new Date());

   res.send("Hello world");
});

app.get("/random", (req, res) => {
    const data = {
      user: {
          firstName: faker.name.firstName('m'),
          lastName: faker.name.lastName('m'),
          email: faker.internet.email()
      },
        company: faker.company.companyName()
    };

    //res.send(JSON.stringify(data));
    res.json(data);
});

app.listen(3000, err => {
    if(err) return console.error("Ошибка запуска сервера");
    console.log("Сервер запущен");
});



