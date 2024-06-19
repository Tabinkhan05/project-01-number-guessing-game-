#! usr/bin/env node


import inquirer from "inquirer";

console.log("lets play number guessing game");
 const random_number = Math.floor(Math.random() * 5 +1 );

const answer = await inquirer.prompt([{
    name : "guessed number",
    type : "number",
    message : " enter your desired number(number limit from 1 to 5):"

},
]);

if(answer.guessednumber == random_number){
    console.log("congrats! you guessed a correct number");    
}
else{
    console.log("oops ! you guessed wrong number");
}
