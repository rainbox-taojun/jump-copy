export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    console.log('game page init')
  }

  restart() {
    console.log('game restart')
  }
}