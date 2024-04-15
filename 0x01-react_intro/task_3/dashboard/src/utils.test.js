import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utility functions", () => {
  test("getFullYear returns the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
  test("getFooterCopy returns a string", () => {
    const argTrue = "Holberton School";
    const argFalse = "Holberton School main dashboard";
    expect(getFooterCopy(true)).toBe(argTrue);
    expect(getFooterCopy(false)).toBe(argFalse);
  });
  test("getLatestNotification returns a string", () => {
    const notification = `<strong>Urgent requirement</strong> - complete by EOD`;
    expect(getLatestNotification()).toBe(notification);
  });
});
