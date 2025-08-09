import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormStep from "../components/FormStep";
import TextInput from "../components/TextInput";
import NumberInput from "../components/NumberInput";
import DropdownInput from "../components/DropdownInput";
import ProgressIndicator from "../components/ProgressIndicator";
import {
  validateLoanAmount,
  validateEmail,
  validatePhone,
} from "../utils/validation";
import { submitLead } from "../utils/api";
import type { FormData } from "../utils/api.ts";
import type { LoanTypeOption } from "../types.ts";
import styles from "./LeadForm.module.css";

const loanTypeOptions: LoanTypeOption[] = [
  { value: "Personal Loan", label: "Personal Loan" },
  { value: "Car Loan", label: "Car Loan" },
  { value: "Business Loan", label: "Business Loan" },
];

export default function LeadForm() {
  const [step, setStep] = useState<number>(1);
  const methods = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      loanAmount: "5000",
      loanType: "Personal Loan",
      name: "",
      email: "",
      phone: "",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    trigger,
  } = methods;
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await submitLead(data);
      navigate("/thank-you", { state: { formData: data } });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleNext = async () => {
    const isValid = await trigger(["loanAmount", "loanType"]);
    if (isValid) {
      setStep(2);
    }
  };

  const handleBack = () => setStep(1);

  return (
    <div className={styles.container}>
      <ProgressIndicator currentStep={step} totalSteps={2} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <FormStep title="Loan Details">
              <NumberInput
                label="Loan Amount (AUD)"
                name="loanAmount"
                register={methods.register("loanAmount", {
                  required: "Loan amount is required",
                  validate: validateLoanAmount,
                })}
                error={methods.formState.errors.loanAmount}
                placeholder="Enter loan amount"
              />
              <DropdownInput
                label="Loan Type"
                name="loanType"
                options={loanTypeOptions}
                register={methods.register("loanType", {
                  required: "Please select a loan type",
                })}
                error={methods.formState.errors.loanType}
              />
              <div className={styles.buttonContainer}>
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.button}
                >
                  Next
                </button>
              </div>
            </FormStep>
          )}
          {step === 2 && (
            <FormStep title="Contact Details">
              <TextInput
                label="Full Name"
                name="name"
                type="text"
                register={methods.register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                error={methods.formState.errors.name}
                placeholder="Enter your full name"
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                register={methods.register("email", {
                  required: "Email is required",
                  validate: validateEmail,
                })}
                error={methods.formState.errors.email}
                placeholder="Enter your email"
              />
              <TextInput
                label="Phone Number"
                name="phone"
                type="tel"
                register={methods.register("phone", {
                  required: "Phone number is required",
                  validate: validatePhone,
                })}
                error={methods.formState.errors.phone}
                placeholder="Enter your phone number"
              />
              <div className={styles.buttonContainer}>
                <button
                  type="button"
                  onClick={handleBack}
                  className={styles.button}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.button} ${
                    isSubmitting ? styles.disabled : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </FormStep>
          )}
        </form>
      </FormProvider>
    </div>
  );
}
