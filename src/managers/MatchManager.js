import { date, uid } from 'quasar'
import Match from 'src/model/Match'
import LineupManager from './LineupManager'
import Consts from 'src/util/constants'

export default {

    createMatch (name, schedule) {
        if (!schedule) {
            schedule = schedule.now()
        }
        if (!name) {
            name = `Soccer Match: ${date.formatDate(schedule, 'YYYY-MM-DDTHH:mm')}`
        }

        const id = uid()
        const match = new Match({ id, name, schedule })

        return match
    },

    setMatchGoalie (match, playerAsGoalie) {
        match.currentGoalie = playerAsGoalie
    },

    addPlayerToMatch (match, player) {
        if (!match.players.find(({ id }) => id === player.id)) {
            match.players.push(player)
        }

        const playerChange = {
            playerId: player.id,
            changes: 0
        }
        match.playerChanges.push(playerChange)
    },

    removePlayerFromMatch (match, player) {
        let index = match.players.findIndex(({ id }) => id === player.id)
        if (index >= 0) {
            match.players.splice(index, 1)
        }

        index = match.playerChanges.findIndex(({ playerId }) => playerId === player.id)
        if (index >= 0) {
            match.playerChanges.splice(index, 1)
        }
    },

    setCurrentLineUpToMatch (match, lineup) {
        const players = LineupManager.getPlayersFromLineup(lineup)

        if (players.length !== Consts.positions.length) {
            throw new Error('Missing players for Lineup')
        }

        match.lineups.push(lineup)
        match.currentLineUp = lineup

        players.forEach(({ id }) => match.playerChanges.find(({ playerId }) => playerId === id).changes++)
    },

    generateLineupForMatch (match) {
        if (!match.currentGoalie) {
            throw new Error('Please set a Goalie')
        }
        const changeablePlayers = [].concat(match.players).filter(({ id }) => id !== match.currentGoalie.id)

        const currentLineUp = match.currentLineUp

        const playersInField = LineupManager.getPlayersFromLineup(currentLineUp)
        const playersInFieldIds = playersInField.map(({ id }) => id)

        const playersInBench = changeablePlayers.filter(({ id }) => !playersInFieldIds.includes(id))

        if (currentLineUp) {
            console.log(playersInBench)
        }
    }

}
