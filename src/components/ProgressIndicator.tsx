import styles from "./ProgressIndicator.module.css";

interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: Props) {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index + 1}
          className={`${styles.step} ${
            currentStep === index + 1 ? styles.active : ""
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
