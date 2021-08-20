class Player {
    constructor (data) {
        this._id = data.id
        this._name = data.name
        this._positions = data.positions || {
            defenseLeft: false,
            defenseRight: false,
            middleLeft: false,
            middleCenter: false,
            middleRight: false,
            forward: false
        }
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

    get positions () {
        return this._positions
    }

    set positions (positions) {
        this._positions = positions
    }
}

export default Player
