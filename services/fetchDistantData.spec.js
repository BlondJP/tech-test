const { Response } = require("node-fetch");

describe("Unit Test of fetchDistantData", () => {
  it("check fetch promise & json serialization", async () => {
    const url = "http://fake-url:3000/players";
    const fetch = jest.fn(() => Promise.resolve(new Response("[{}, {}, {}]")));

    const fetchDistantData = require("./fetchDistantData").bind(null, {
      url,
      fetch
    });

    const players = await fetchDistantData(url);
    expect(players.length).toBe(3);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("check error handling", async () => {
    const url = "http://fake-url:3000/players";
    const fetch = jest.fn(() => Promise.resolve(new Response()));

    const fetchDistantData = require("./fetchDistantData").bind(null, {
      url,
      fetch
    });

    await expect(fetchDistantData(url)).rejects.toThrow(
      new Error("data fetching has failed")
    );
  });
});
