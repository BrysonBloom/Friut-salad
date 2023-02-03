import { FruitsController } from "./Controllers/FruitsController.js";
import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  fruitsController = new FruitsController()
  playersController = new PlayersController()

}

window["app"] = new App();
