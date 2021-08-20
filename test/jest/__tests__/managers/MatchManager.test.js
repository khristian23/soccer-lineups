import MatchManager from 'src/managers/MatchManager'

describe('Start a game', () => {
    it('Should create a match with basic parameters', () => {
        const name = 'A match'
        const schedule = Date.now()
        const match = MatchManager.createMatch(name, schedule)

        expect(match.id).not.toBeNull()
        expect(match.name).not.toBeNull()
        expect(match.schedule).toBe(schedule)
    })

    it('Should create a math with default parameters', () => {
        const match = MatchManager.createMatch()

        expect(match.id).not.toBeNull()
        expect(match.name).not.toBeNull()
        expect(match.schedule).not.toBeNull()
    })
})
