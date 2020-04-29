window.PIXI = require('../js/libs/pixi.min')
window.p2 = require('../js/libs/p2.min')
window.Phaser = require('../js/libs/phaser-split.min')

class Preloader extends window.Phaser.State {

  preload() {
    this.load.image('bg', 'assets/bg.jpg')
    this.load.image('hero', 'assets/hero.png')
    this.load.audio('music','assets/music.mp3');
  }

  create() {
    this.state.start('Game')
  }
}

export default Preloader
