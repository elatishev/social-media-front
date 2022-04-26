import { makeRelationship } from "../index";

describe("Check relationship status", () => {
  it("Expect status to be single", () => {
    const result = makeRelationship(1);
    expect(result).toBe("Single");
  });
  it("Expect status to be married", () => {
    const result = makeRelationship(2);
    expect(result).toBe("Married");
  });
  it("Expect status to be not specified", () => {
    const result = makeRelationship(1.5);
    expect(result).toBe("not specified");
  });
  it("Expect status to be not specified when not passing a parameter", () => {
    const result = makeRelationship();
    expect(result).toBe("not specified");
  });
});
