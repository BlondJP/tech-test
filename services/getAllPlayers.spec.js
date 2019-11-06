const players = [{ id: 1 }, { id: 42 }, { id: 100 }, { id: 400 }, { id: 500 }];

describe("Unit Test of getAllPlayers", () => {
  it("check error handling", async () => {
    const fetchData = jest.fn(() => Promise.resolve(null));
    const getAllPlayers = require("./getAllPlayers").bind(null, { fetchData });

    await expect(getAllPlayers()).rejects.toThrow(
      new Error("players has not been got correctly")
    );
  });

  it("common case", async () => {
    const fetchData = jest.fn(() =>
      Promise.resolve({ players: [{ id: 1 }, { id: 2 }, { id: 3 }] })
    );
    const getAllPlayers = require("./getAllPlayers").bind(null, { fetchData });

    const players = await getAllPlayers();
    expect(players.length).toBe(3);

    const ids = players.map(player => player.id);
    expect(ids).toEqual([1, 2, 3]);
  });
});
