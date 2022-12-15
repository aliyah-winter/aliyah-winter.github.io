// INSERT 3 RANDOM ANGEL.PNG's

angels = document.getElementById('angels')

function randomNumSet() {
  let set = new Set()
  while (set.size < 3) {
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
