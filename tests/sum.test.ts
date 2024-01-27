import { describe, expect, test } from "@jest/globals";
import sum from "../src/1/2/3/test";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
