import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import TextInput from "../../components/TextInput";
import type { UseFormRegisterReturn } from "react-hook-form";

describe("TextInput", () => {
  const mockRegister: UseFormRegisterReturn = {
    name: "test",
    onChange: async () => {},
    onBlur: async () => {},
    ref: () => {},
  };

  it("renders label and placeholder", () => {
    render(
      <TextInput
        label="Name"
        name="name"
        type="text"
        register={mockRegister}
        placeholder="Enter name"
      />
    );
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });
});
