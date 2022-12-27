import index from "./index.json";

test("json config is correct", () => {
  expect(Array.isArray(index)).toBeTruthy();

  index.forEach((config) => {
    expect(config).toHaveProperty("location");
    expect(typeof config.location).toBe("string");
  });
});
