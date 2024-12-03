import { describe, expect, it } from "@jest/globals";
import { add } from "./add";

describe("testing add file", () => {
  it("empty string should result in zero", () => {
    expect(add("")).toBe(0);
  });

  it('"1,2,3" should result in 6', () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("negative number should throw error", () => {
    expect(() => add("1,-2,3")).toThrowErrorMatchingSnapshot();
  });
});
