import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import DropdownInput from "../../components/DropdownInput";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { LoanTypeOption } from "../../types";

describe("DropdownInput", () => {
  const mockRegister: UseFormRegisterReturn = {
    name: "loanType",
    onChange: async () => {},
    onBlur: async () => {},
    ref: () => {},
  };

  const options: LoanTypeOption[] = [
    { value: "Personal Loan", label: "Personal Loan" },
    { value: "Car Loan", label: "Car Loan" },
    { value: "Business Loan", label: "Business Loan" },
  ];

  it("renders label and all options", () => {
    render(
      <DropdownInput
        label="Loan Type"
        name="loanType"
        options={options}
        register={mockRegister}
      />
    );
    expect(screen.getByLabelText("Loan Type")).toBeInTheDocument();
    options.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it("shows error message if error prop is provided", () => {
    render(
      <DropdownInput
        label="Loan Type"
        name="loanType"
        options={options}
        register={mockRegister}
        error={{ message: "Required" }}
      />
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
