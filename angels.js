// INSERT 3 RANDOM ANGEL.PNG's
//create function to insert angel into div
//create function to randomise a number between 0 and 6
//use concatenation to select which angel at random

angels = document.getElementById('angels')

function randomNum () {
 return Math.floor(Math.random() * (8 - 1) + 1)
}
let randomInt = randomNum()

const angelImg = document.createElement('img')
angelImg.src = `images/angel${randomInt}.png`
angelImg.setAttribute('class', 'angel')

function placeThreeAngel () {
    for (let i = 0; i < 3; i++) {
        angels.appendChild(angelImg)
    }
}

// function placeThreeAngel () {
//     angels.appendChild(angelImg)
// }

placeThreeAngel()
// function placeAngel () {
//     angels.appendChild(angelImg)
// }

// placeAngel()