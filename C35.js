var s, db, p
function preload () {



}





function setup () {
createCanvas (600, 400)
s = createSprite (width / 2, height / 2)
db = firebase.database ()
db.ref ("position").on ("value", read, err)
}



function draw () {
  background (0)

if (keyDown ("up")) {
update (0, -10)
}
if (keyDown ("down")) {
  update (0, 10)
  }
  if (keyDown ("left")) {
    update (-10, 0)
    }
    if (keyDown ("right")) {
      update (10, 0)
      }

  drawSprites ()
}

function update (x, y) {
// s.x += x
// s.y += y
db.ref ("position").update ({x:p.x + x, y:p.y + y})
}


function read (d) {
p = d.val ()
s.x = p.x
s.y = p.y
}

function err () {
console.log ("error occured")
}