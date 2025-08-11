import { describe, it, expect } from "vitest";
import {
  validateLoanAmount,
  validateEmail,
  validatePhone,
} from "../../utils/validation";

describe("Validation Utils", () => {
  it("validates loan amount", () => {
    expect(validateLoanAmount("5000")).toBe(true);
    expect(validateLoanAmount("500")).toBe(
      "Loan amount must be at least 1000 AUD"
    );
  });
  it("validates email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("bad")).toBe("Please enter a valid email address");
  });
  it("validates phone", () => {
    expect(validatePhone("1234567890")).toBe(true);
    expect(validatePhone("abc")).toBe("Please enter a valid phone number");
  });
});
