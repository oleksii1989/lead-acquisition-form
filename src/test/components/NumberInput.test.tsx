import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import NumberInput from "../../components/NumberInput";
import type { UseFormRegisterReturn } from "react-hook-form";

describe("NumberInput", () => {
  const mockRegister: UseFormRegisterReturn = {
    name: "loanAmount",
    onChange: async () => {},
    onBlur: async () => {},
    ref: () => {},
  };

  it("renders label and placeholder", () => {
    render(
      <NumberInput
        label="Loan Amount"
        name="loanAmount"
        register={mockRegister}
        placeholder="Enter amount"
      />
    );
    expect(screen.getByLabelText("Loan Amount")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter amount")).toBeInTheDocument();
  });

  it("shows error message if error prop is provided", () => {
    render(
      <NumberInput
        label="Loan Amount"
        name="loanAmount"
        register={mockRegister}
        placeholder="Enter amount"
        error={{ message: "Required" }}
      />
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("renders input with type number", () => {
    render(
      <NumberInput
        label="Loan Amount"
        name="loanAmount"
        register={mockRegister}
        placeholder="Enter amount"
      />
    );
    const input = screen.getByLabelText("Loan Amount");
    expect(input).toHaveAttribute("type", "number");
  });
});
