const calculateTeamPoints = require("../calculateTeamPoints.js");
const players = require("./__data__/players.json");

describe("calculateTeamPoints", () => {
  const result = calculateTeamPoints(players);

  for (let i = 0; i < result.length; i++) {
    it(`${i}. should return team points of only active players in descending order with (team,points)`, () => {
      expect(result[i]).toHaveProperty("team");
      expect(result[i]).toHaveProperty("points");
    });
  }
});
