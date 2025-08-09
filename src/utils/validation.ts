export function validateLoanAmount(value: string): string | true {
  const num = parseFloat(value);

  if (num < 1000) {
    return "Loan amount must be at least 1000 AUD";
  }
  if (num > 50000) {
    return "Loan amount cannot exceed 50,000 AUD";
  }

  return true;
}

export function validateEmail(value: string): string | true {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(value) || "Please enter a valid email address";
}

export function validatePhone(value: string): string | true {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;

  return phoneRegex.test(value) || "Please enter a valid phone number";
}
