import './js/libs/weapp-adapter'
import './js/libs/symbol'
import './js/libs/stub'

window.PIXI = require('./js/libs/pixi.min')
window.p2 = require('./js/libs/p2.min')
window.Phaser = require('./js/libs/phaser-split.min')

import BootState from './states/Boot.js'
import PreloaderState from './states/Preloader.js'
import GameState from './states/Game.js'

let config = {
  width : 750,
  height: 750 / (window.innerWidth / window.innerHeight),
  renderer: Phaser.CANVAS,
  canvas: canvas
}

var game = new Phaser.Game(config)

game.state.add('Boot', BootState, false)
game.state.add('Preloader', PreloaderState, false)
game.state.add('Game', GameState, false)
game.state.start('Boot')