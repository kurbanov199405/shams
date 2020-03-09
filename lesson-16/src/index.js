"use strict";
const phrases = require("./greetings");
const axios = require("axios");

document.addEventListener("DOMContentLoaded", function () {
    document.write(phrases[0]);
    axios.get("http://api.ipify.org?format=json")
        .then(response => {
            document.write(" " + phrases[1] + ", my ip is" + response.data.ip);
        });

    axios.get("http://localhost:3000/random")
        .then(res => {
            console.log(res.data);
        });
});