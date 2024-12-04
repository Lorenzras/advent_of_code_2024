import { describe, expect, it } from "@jest/globals";
import fs from "fs";
import path from "path";
import f from "./part_02";

describe("day 1 part 2", () => {
  it("should return 31 according to the sample in the problem", () => {
    const input = fs.readFileSync(
      path.join(__dirname, "input_sample.txt"),
      "utf-8",
    );

    expect(f(input)).toBe(31);
  });
});
