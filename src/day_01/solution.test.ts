import { describe, expect, it } from "@jest/globals";
import fs from "fs";
import path from "path";
import f from "./solution";

describe("testing add file", () => {
  it("should return 11 according to sample in the problem", () => {
    const input = ["3 4", "4 3", "2 5", "1 3", "3 9", "3 3"].join("\n");

    expect(f(input)).toBe(11);
  });

  it("should return correct answer for a single pair", () => {
    const input = "1 1";

    expect(f(input)).toBe(0);
  });

  it("should return correct answer for the official input data", () => {
    const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

    expect(f(input)).toMatchSnapshot();
  });
});
