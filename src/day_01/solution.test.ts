import { describe, expect, it } from "@jest/globals";
import f from "./solution";

describe("testing add file", () => {
  it("should return 11 according to sample in the problem", () => {
    const input = ["3 4", "4 3", "2 5", "1 3", "3 9", "3 3"].join("\n");

    expect(f(input)).toBe(11);
  });
});
