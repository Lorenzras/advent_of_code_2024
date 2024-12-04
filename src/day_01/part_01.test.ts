import { describe, expect, it } from "@jest/globals";
import fs from "fs";
import path from "path";
import f from "./part_01";

describe("day 1 part 1", () => {
  it("should return 11 according to the sample in the problem", () => {
    const input = fs.readFileSync(
      path.join(__dirname, "input_sample.txt"),
      "utf-8",
    );

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
