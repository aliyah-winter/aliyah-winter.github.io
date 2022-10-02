// INSERT 3 RANDOM ANGEL.PNG's
//create function to randomise a number between 0 and 6
//create function to insert angel into div
//loop over img creation and insertion 3 times to place 3 random angels
//create statement to make sure random nums are never the same

angels = document.getElementById('angels')

function randomNum() {
 return Math.floor(Math.random() * (8 - 1) + 1)
}

function placeThreeAngel() {
    for (let i = 0; i < 3; i++) {
        let randomInt = randomNum()
        let angelImg = document.createElement('img')
        angelImg.src = `images/angel${randomInt}.png`
        angelImg.setAttribute('class', 'angel')
        angels.appendChild(angelImg)
    }
}
placeThreeAngel()

// if (randomInt === randomInt) {
//     return false
// } else 
    