var db, f, p, g, bg, gamestate, pc, cimg1, cimg2, track, c1, c2, cars, api
function preload () {
bg = loadImage ("./Speed Racer assets/background.png")
track = loadImage ("./Speed Racer assets/track.jpg")
cimg1 = loadImage ("./Speed Racer assets/car1.png")
cimg2 = loadImage ("./Speed Racer assets/car2.png")
}





function setup () {
createCanvas (windowWidth, windowHeight)
db = firebase.database ()
g = new Game ()
g.getstate ()
g.start ()
cars = []
}



function draw () {
  console.log (25, cars)
if (pc == 2 ) {
  g.updatestate (1)
}
if (gamestate == 1) {
  g.play ()
}
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}