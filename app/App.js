import { FruitsController } from "./Controllers/FruitsController.js";

class App {
  fruitsController = new FruitsController()
}

window["app"] = new App();
