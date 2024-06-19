#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("lets play number guessing game");
var random_number = Math.floor(Math.random() * 5 + 1);
var answer = await inquirer_1.default.prompt([{
        name: "guessed number",
        type: "number",
        message: " enter your desired number(number limit from 1 to 5):"
    },
]);
if (answer.guessednumber == random_number) {
    console.log("congrats! you guessed a correct number");
}
else {
    console.log("oops ! you guessed wrong number");
}
