const players = [{ id: 1 }, { id: 42 }, { id: 100 }, { id: 400 }, { id: 500 }];

describe("Unit Test of getOnePlayerById", () => {
  it("try getting players", async () => {
    const fetchData = jest.fn(() => Promise.resolve({ players }));
    const getOnePlayerById = require("./getOnePlayerById").bind(null, {
      fetchData
    });

    await expect(getOnePlayerById(2)).rejects.toThrow(
      new Error("player not found")
    );
    await expect(getOnePlayerById(3)).rejects.toThrow(
      new Error("player not found")
    );
    await expect(getOnePlayerById(5)).rejects.toThrow(
      new Error("player not found")
    );

    let player = await getOnePlayerById(1);
    expect(typeof player).toBe("object");

    player = await getOnePlayerById(42);
    expect(typeof player).toBe("object");

    player = await getOnePlayerById(100);
    expect(typeof player).toBe("object");

    player = await getOnePlayerById(400);
    expect(typeof player).toBe("object");
  });
});
