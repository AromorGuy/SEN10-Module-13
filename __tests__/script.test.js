const { buildVisitGreeting } = require("../script");

// new Date(year, monthIndex, day, hour) — Oct 2026: 26 = Mon, 30 = Fri, 31 = Sat
describe("buildVisitGreeting", () => {
  test("says good morning before noon", () => {
    expect(buildVisitGreeting(new Date(2026, 9, 26, 9))).toBe(
      "Good morning! 4 days until the weekend." // intentionally wrong: demo failing test
    );
  });

  test("says good afternoon between noon and 6pm", () => {
    expect(buildVisitGreeting(new Date(2026, 9, 28, 14))).toContain(
      "Good afternoon"
    );
  });

  test("says good evening from 6pm onward", () => {
    expect(buildVisitGreeting(new Date(2026, 9, 28, 20))).toContain(
      "Good evening"
    );
  });

  test("uses singular 'day' on Friday", () => {
    expect(buildVisitGreeting(new Date(2026, 9, 30, 10))).toBe(
      "Good morning! 1 day until the weekend."
    );
  });

  test("detects the weekend on Saturday", () => {
    expect(buildVisitGreeting(new Date(2026, 9, 31, 10))).toBe(
      "Good morning! It's the weekend!"
    );
  });
});
