import { appState } from "../AppState.js";
import { fruitsService } from "../Services/FruitsService.js";
import { Pop } from "../Utils/Pop.js";
import { setText, removeAttributes } from "../Utils/Writer.js";

export class FruitsController {

  _endGame(){
    console.log("wow")
  }
  
  async _startGame(){
      const yes = await Pop.confirm('Start Game?', `${appState.player.name} are you ready?`,)
      if(!yes){return}
      removeAttributes('player-input', 'disabled')
      setTimeout(this._endGame, 2000)
    }

  constructor() {
    this.drawRandomFruit()
    this._startGame = this._startGame.bind(this)
    appState.on('player', this._startGame)
  }

  drawRandomFruit() {
    fruitsService.getRandomFruit()
    setText('random-fruit', appState.fruit)
  }

  drawScore(){
    
  }

}