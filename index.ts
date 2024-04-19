#!/usr/bin/env node
import inquirer from "inquirer"
const randomnumber = Math.floor(Math.random()*5+1);
const answer = await inquirer.prompt([{
    name:"userguessednumber",
    type:"number",
    message:"please guess a number between 1-5",
},
]);
if(answer.userguessednumber===randomnumber){
    console.log("congratulation ! you guessed right number");
    }else{
        console.log("you guessed wrong number");
    }