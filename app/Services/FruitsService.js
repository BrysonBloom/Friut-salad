import { appState } from "../AppState.js";
import { Fruit } from "../Models/Fruit.js";
class FruitService{
  

  getRandomFruit(){
    let fruits = appState.fruits
    let randomNum = Math.floor(Math.random() * fruits.length);
    appState.fruit = fruits[randomNum]
  }


}

export const fruitsService = new FruitService()