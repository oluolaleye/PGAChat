const _ = require('lodash')
// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

module.exports = (players) => {
  // filter input to get only active players
  const activePlayers = _.filter(players, { isActive: true })

  // group players by team and return aggregated players point by team
  const unSortedPlayers = _(activePlayers)
    .groupBy('team')
    .map((player, key) => {
      return {
        team: key,
        points: _.sumBy(player, 'points')
      }
    })
    .value()

  // sort team array by points in a descending order
  const sortedPlayers = _.orderBy(unSortedPlayers, ['points'], ['desc'])

  return sortedPlayers
}
