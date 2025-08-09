import type { LoanType } from "../types";

export interface FormData {
  loanAmount: string;
  loanType: LoanType;
  name: string;
  email: string;
  phone: string;
}

export async function submitLead(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  // Simulate API call to Salesforce
  console.log("Submitting to Salesforce:", formData);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Lead submitted successfully" });
    }, 1000);
  });
}
