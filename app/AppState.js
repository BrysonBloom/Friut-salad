import { Fruit } from "./Models/Fruit.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Fruit').Fruit[]} */
  fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Cantaloupe", "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian", "Elderberry", "Fig", "Goji berry", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeydew", "Huckleberry", "Jackfruit", "Jambul", "Kiwi", "Kumquat", "Lemon", "Lime", "Loquat", "Lychee", "Mandarin", "Mango", "Melon", "Nectarine", "Orange", "Papaya", "Peach", "Pear", "Persimmon", "Pineapple", "Plum", "Pomegranate", "Prickly pear", "Quince", "Raspberry", "Redcurrant",
  "Star fruit", "Strawberry", "Tangerine", "Ugli fruit", "Watermelon"]
  /** @type {import('./Models/Fruit').Fruit} */
  fruit = null

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
