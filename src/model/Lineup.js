class Lineup {
    constructor (data) {
        this._id = data.id
        this._goalie = data._goalie
        this._defenseLeft = data._defenseLeft
        this._defenseRight = data._defenseRight
        this._middleLeft = data._middleLeft
        this._middleRight = data._middleRight
        this._middleCenter = data._middleCenter
        this._forward = data._forward
    }

    set id (id) {
        this._id = id
    }

    get id () {
        return this._id
    }

    set goalie (goalie) {
        this._goalie = goalie
    }

    get goalie () {
        return this._goalie
    }

    set defenseLeft (defenseLeft) {
        this._defenseLeft = defenseLeft
    }

    get defenseLeft () {
        return this._defenseLeft
    }

    set defenseRight (defenseRight) {
        this._defenseRight = defenseRight
    }

    get defenseRight () {
        return this._defenseRight
    }

    set middleLeft (middleLeft) {
        this._middleLeft = middleLeft
    }

    get middleLeft () {
        return this._middleLeft
    }

    set middleRight (middleRight) {
        this._middleRight = middleRight
    }

    get middleRight () {
        return this._middleRight
    }

    set middleCenter (middleCenter) {
        this._middleCenter = middleCenter
    }

    get middleCenter () {
        return this._middleCenter
    }

    set forward (forward) {
        this._forward = forward
    }

    get forward () {
        return this._forward
    }
}

export default Lineup
