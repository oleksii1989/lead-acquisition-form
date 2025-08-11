import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "../test-utils";
import userEvent from "@testing-library/user-event";
import LeadForm from "../../pages/LeadForm";
import { submitLead } from "../../utils/api";

vi.mock("../../utils/api", () => ({
  submitLead: vi.fn(),
}));

const mockSubmitLead = submitLead as ReturnType<typeof vi.fn>;

describe("LeadForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    mockSubmitLead.mockResolvedValue({ success: true });
  });

  it("submits form with valid data", async () => {
    render(<LeadForm />);
    await user.clear(screen.getByLabelText("Loan Amount (AUD)"));
    await user.type(screen.getByLabelText("Loan Amount (AUD)"), "10000");
    await user.click(screen.getByRole("button", { name: "Next" }));

    await waitFor(() => {
      expect(screen.getByText("Contact Details")).toBeInTheDocument();
    });

    await user.type(screen.getByLabelText("Full Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText("Phone Number"), "1234567890");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(mockSubmitLead).toHaveBeenCalled();
    });
  });
});
