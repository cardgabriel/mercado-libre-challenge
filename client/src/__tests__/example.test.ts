import { describe, it, expect } from "vitest";

// Simple function to test
function sum(a: number, b: number): number {
  return a + b;
}

describe("Basic test example", () => {
  it("sum should work correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(5, 5)).toBe(10);
  });
});
