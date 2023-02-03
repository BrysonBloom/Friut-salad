

export class Player{
    constructor(data) {
        this.name = data.name
        this.score = data.score || 0
        this.highScore = data.highScore || 0
    }
}