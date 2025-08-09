import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import type { LoanTypeOption } from "../types.ts";
import styles from "./DropdownInput.module.css";

interface Props {
  label: string;
  name: string;
  options: LoanTypeOption[];
  register: UseFormRegisterReturn;
  error?: { message?: string };
}

export default function DropdownInput({
  label,
  name,
  options,
  register,
  error,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select id={name} className={styles.select} {...register}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
