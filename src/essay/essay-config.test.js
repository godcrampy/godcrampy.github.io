import index from "./index.json";

test("json config is correct", () => {
  expect(Array.isArray(index)).toBeTruthy();

  index.forEach((config) => {
    expect(config).toHaveProperty("location");
    expect(config).toHaveProperty("author");
    expect(config).toHaveProperty("date");
    expect(config).toHaveProperty("title");
    expect(config).toHaveProperty("abstract");
    expect(typeof config.location).toBe("string");
    expect(typeof config.author).toBe("string");
    expect(typeof config.date).toBe("string");
    expect(typeof config.title).toBe("string");
    expect(typeof config.abstract).toBe("string");
  });
});
