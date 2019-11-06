describe("Unit Test of fetchLocalData", () => {
  it("check require error handling", async () => {
    const filePath = "./unexisting-file.js";
    const fetchLocalData = require("./fetchLocalData").bind(null, { filePath });

    await expect(fetchLocalData()).rejects.toThrow(
      new Error("data fetching has failed")
    );
  });

  it("common case", async () => {
    const filePath = "../local_data";
    const fetchLocalData = require("./fetchLocalData").bind(null, { filePath });

    const { players } = await fetchLocalData();
    expect(players.length).toBe(5);

    const ids = players.map(player => player.id);
    expect(ids).toEqual([52, 95, 65, 102, 17]);
  });
});
