import { describe, expect, it } from "@jest/globals";
import fs from "fs";
import path from "path";
import f from "./part_01";

describe("day 2 part 1", () => {
  it("should return correct answer according to the sample in the problem", () => {
    const input = fs.readFileSync(
      path.join(__dirname, "input_sample.txt"),
      "utf-8",
    );

    expect(f(input)).toBe(2);
  });
});
