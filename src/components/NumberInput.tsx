import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import styles from "./NumberInput.module.css";

interface Props {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: { message?: string };
  placeholder: string;
}

export default function NumberInput({
  label,
  name,
  register,
  error,
  placeholder,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        type="number"
        min="0"
        className={styles.input}
        placeholder={placeholder}
        {...register}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
