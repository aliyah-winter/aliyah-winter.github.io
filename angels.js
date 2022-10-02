// INSERT 3 RANDOM ANGEL.PNG's
//create function to insert angel into div
//create function to randomise a number between 0 and 6
//use concatenation to select which angel at random

angels = document.getElementById('angels')
console.log(angels)

function randomNum () {
 return Math.floor(Math.random() * 7)
}
let randomInt = randomNum()

let angel = document.createElement('img')
angel.src = `images/angel${randomInt}.png`
console.log(angel)

function placeAngel () {
    return angels.appendChild(angel)
}