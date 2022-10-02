// INSERT 3 RANDOM ANGEL.PNG's
//create function to randomise a number between 0 and 6
//create function to insert angel into div
//loop over img creation and insertion 3 times to place 3 random angels
//create set generator to make sure random nums are never the same
//loop over set to update img src
//insert js and id of angels to all blog pages

angels = document.getElementById('angels')


function randomNumSet() {
    let set = new Set()
    while(set.size < 3) {
        set.add(Math.floor(Math.random() * (8 - 1) + 1))
    }
    return set
}
let randomSet = randomNumSet()

for (num of randomSet) {
    let angelImg = document.createElement('img')
    angelImg.setAttribute('class', 'angel')
    if (document.querySelector('h1').innerHTML === 'aliyah winter') {
        angelImg.src = `./images/angel${num}.png`
    } else {
        angelImg.src = `../images/angel${num}.png`
    }
    angels.appendChild(angelImg)
}
// function randomNum() {
//     return Math.floor(Math.random() * (8 - 1) + 1)
// }
// function placeThreeAngel() {
//     for (let i = 0; i < 3; i++) {
//         let randomInt = randomNum()
//         let angelImg = document.createElement('img')
//         angelImg.src = `images/angel${randomInt}.png`
//         angelImg.setAttribute('class', 'angel')
//         angels.appendChild(angelImg)
//     }
// }
// placeThreeAngel()

// if (randomInt === randomInt) {
//     return false
// } else 
    