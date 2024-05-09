#! /usr/bin/env node
import inquirer from "inquirer";
//generating random number from 1-10
let randomNumber = Math.floor(Math.random() * 10 + 1);
//ask user to guess a number
let askNumber = await inquirer.prompt({
    message: "Guess a Number between 1-10",
    name: "userNum",
    type: "number"
});
//conditional statements
if (askNumber.userNum === randomNumber) {
    console.log("Congrats! You guessed the right number");
}
else {
    console.log("Try again! Your guessed the wrong number");
}
