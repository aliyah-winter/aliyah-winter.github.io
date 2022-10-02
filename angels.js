// INSERT 3 RANDOM ANGEL.PNG's
//create function to insert angel into div
//create function to randomise a number between 0 and 6
//use concatenation to select which angel at random

angels = document.getElementById('angels')

function randomNum () {
 return Math.floor(Math.random() * 7)
}
let randomInt = randomNum()