import { appState } from "../AppState.js";
import { fruitsService } from "../Services/FruitsService.js";
import { setText } from "../Utils/Writer.js";

export class FruitsController{
  constructor(){
    this.drawRandomFruit()
  }

  drawRandomFruit(){
    fruitsService.getRandomFruit()
    setText('random-fruit', appState.fruit)
  }


}