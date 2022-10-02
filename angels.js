// INSERT 3 RANDOM ANGEL.PNG's
//create function to insert angel into div
//create function to randomise a number between 0 and 6
//use concatenation to select which angel at random

angels = document.getElementById('angels')

function randomNum () {
 return Math.floor(Math.random() * (8 - 1) + 1)
}
let randomInt = randomNum()

let angelImg = document.createElement('img')
angelImg.src = `images/angel${randomInt}.png`
angelImg.setAttribute('class', 'angel')

console.log(angelImg)

function placeAngel () {
    return angels.appendChild(angelImg)
}
placeAngel()
placeAngel()
placeAngel()