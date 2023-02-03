import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersServices{
    

    createPlayer(formData){
        let curPlayerIndex = appState.players.findIndex(e => e.name == formData.name)
        
        if (curPlayerIndex == -1){
            let newPlayer = new Player(formData)
            appState.players.push(newPlayer)
            appState.player = appState.players[appState.players.length -1]
            appState.emit('players')
        }else{
            appState.player = appState.players[curPlayerIndex]
        }
    }

}

export const playersServices = new PlayersServices