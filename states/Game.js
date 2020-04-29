window.PIXI = require('../js/libs/pixi.min')
window.p2 = require('../js/libs/p2.min')
window.Phaser = require('../js/libs/phaser-split.min')

import Music from '../runtime/music'

class Game extends window.Phaser.State {
  create() {
    this.bg = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'bg')
    this.bg.autoScroll(0, 50);
    this.hero = this.add.sprite(this.world.centerX, this.world.centerY, 'hero')
    this.hero.anchor.setTo(0.5)
    this.hero.inputEnabled = true
    this.hero.input.enableDrag()


    this.music = new Music();



  }

  update() {
    //this.bg.tilePosition.y += 1
  }
}

export default Game
