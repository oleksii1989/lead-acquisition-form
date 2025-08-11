import { useLocation, Navigate, useNavigate } from "react-router-dom";
import type { FormData } from "../utils/api.ts";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
  const { state } = useLocation();
  const { formData }: { formData?: FormData } = state || {};
  const navigate = useNavigate();

  if (!formData) {
    return <Navigate to="/" replace />;
  }

  const handleExploreWebsite = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Thank You for {formData?.loanType || "Loan"} Inquiry!
      </h2>
      <p className={styles.paragraph}>
        We have successfully received your request for loan information. We will
        contact you soon to proceed with your {formData?.loanType || "loan"}{" "}
        application.
      </p>
      <p className={styles.paragraph}>
        We created an account for <strong>{formData?.name || "you"}</strong>.
        You will receive a confirmation email at{" "}
        <strong>{formData?.email || "your email"}</strong> with all the details,
        as well as additional information about our lending options.
      </p>
      <p className={styles.paragraph}>
        Thank you for trusting us with your loan journey. We look forward to
        assisting you soon!
      </p>

      <button onClick={handleExploreWebsite} className={styles.button}>
        Explore our website
      </button>
    </div>
  );
}
