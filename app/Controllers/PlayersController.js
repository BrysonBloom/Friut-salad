import { appState } from "../AppState.js";
import { playersServices } from "../Services/PlayersServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { removeAttributes, setAttributes, setHTML, setText } from "../Utils/Writer.js";


export class PlayersController {
    _drawPlayer() {
        setText('current-player', `Current Player: ${appState.player.name}`)
    }

    constructor() {
        appState.on('player', this._drawPlayer)
        appState.on('players', this.drawLeaderBoard)
        appState.on('score', this.drawScore)
    }

    createPlayer() {
        console.log()
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        playersServices.createPlayer(formData)
        form.reset()
        setAttributes('name', 'disabled', 'true')
    }
    spellCheck() {
        window.event.preventDefault()
        const form = window.event.target
        formDataObject = getFormData(form)
        formData = formDataObject.toString()
        console.log(formData);
        playersServices.spellCheck(formData)
        form.reset()
    }

    drawLeaderBoard() {
        let players = appState.players
        let template = ''
        players.forEach(player => {
            template += `
        <div class="bg-warning my-2 border border-3 border-light">
            <p class="py-2 fs-4 fw-bold font-shadow">${player.name}: ${player.highScore}</p>
        </div>
        `
        })
        setHTML("scoreboard-container", template)
    }

    drawScore() {
        let score = appState.score
        setHTML("player-score", `score = ${score}`)
    }

}