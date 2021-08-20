import { uid } from 'quasar'
import Player from 'src/model/Player'

const players = []

export default {

    getPlayers () {
        return players
    },

    getPlayerById (playerId) {
        return players.find(({ id }) => id === playerId)
    },

    createPlayer (name, positions) {
        const id = uid()
        return new Player({ id, name, positions })
    },

    addPlayer (player) {
        players.push(player)
    },

    updatePlayer (player) {
        const index = players.findIndex(({ id }) => id === player.id)
        if (index >= 0) {
            players.splice(index, 1, player)
        }
    },

    deletePlayer (id) {}

}
