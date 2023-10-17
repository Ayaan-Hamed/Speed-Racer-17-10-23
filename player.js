class Player {
    constructor () {
    this.name = null
    this.x = 0
    this.y = 0
    this.index = null    
    }

getcount () {
db.ref ("pc").on ("value", (g) => {pc = g.val ()})
   }

   updatecount (c) {
    db.ref ("/").update ({pc:c})
   }

   addplayer () {
    db.ref ("players/player"+ this.index).set ({name:this.name, x:this.x, y:this.y})
   }

   static  getplayerinfo () {
    db.ref ("players").on ("value", (g) => {api = g.val ()})
   }

   update () {
   db.ref ("players/player"+ this.index).update ({x:this.x, y:this.y})
   }
}