class Game {
constructor () {
    
}
start () {
    f = new Form ()
    f.display ()
    p = new Player ()
    pc = p.getcount ()
    c1 = createSprite (width / 2 - 230, height - 100 )
    c1.addImage (cimg1)
    c1.scale = 0.08

    c2 = createSprite (width / 2 + 200, height - 100 )
    c2.addImage (cimg2)
    c2.scale = 0.08

    cars = [c1, c2]
    console.log (19, cars)
}

getstate () {
    db.ref ("gamestate").on ("value", (g) => {gamestate = g.val ()})
}
updatestate (a) {
    db.ref ("/").update ({gamestate:a})
} 

hideform () {
 f.hide ()   
}

play () {
this.hideform ()
Player.getplayerinfo ()
if (api != undefined) {
image (track, 0, - height *11, width, height *12)
var index = 0
for (var p in api) {
    index += 1
var  x = api [p].x
var  y = api [p].y
console.log (42, cars)
cars [index - 1].x = x
cars [index - 1].y = y
}
this.controls ()
    drawSprites ()
}
}
controls () {
    if (keyDown ("up")) {
p.y += 10
p.update ()
    }
    if (keyDown ("down")) {
        p.y -= 10
        p.update ()
            }
            if (keyDown ("left")) {
                p.x -= 10
                p.update ()
                    }
                    if (keyDown ("right")) {
                        p.x += 10
                        p.update ()
                            }
}
}
