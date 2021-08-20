class Match {
    constructor (data) {
        this._id = data._id
        this._name = data.name
        this._schedule = data.schedule
        this._players = data.players || []
        this._lineups = data._lineups || []
        this._playerChanges = data._playerChanges
        this._currentLineup = data.currentLineup
        this._currentGoalie = data.currentGoalie
    }

    get id () {
        return this._id
    }

    set id (id) {
        this._id = id
    }

    get name () {
        return this._name
    }

    set name (name) {
        this._name = name
    }

    get schedule () {
        return this._schedule
    }

    set schedule (schedule) {
        this._schedule = schedule
    }

    get players () {
        return this._players
    }

    set players (players) {
        this._players = players
    }

    get lineups () {
        return this._lineups
    }

    set lineups (lineups) {
        this._lineups = lineups
    }

    get playerChanges () {
        return this._playerChanges
    }

    set playerChanges (playerChanges) {
        this._playerChanges = playerChanges
    }

    get currentLineup () {
        return this._currentLineup
    }

    set currentLineup (currentLineup) {
        this._currentLineup = currentLineup
    }

    get currentGoalie () {
        return this._currentGoalie
    }

    set currentGoalie (currentGoalie) {
        this._currentGoalie = currentGoalie
    }
}

export default Match
