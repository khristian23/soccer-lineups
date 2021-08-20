import Consts from 'src/util/constants'

export default {

    getPlayersFromLineup (lineup) {
        const players = []

        Consts.positions.forEach(position => players.push(lineup[position]))

        return players.filter(player => !!player)
    }

}
