import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import styles from "./TextInput.module.css";

interface Props {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  register: UseFormRegisterReturn;
  error?: { message?: string };
  placeholder: string;
}

export default function TextInput({
  label,
  name,
  type,
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
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...register}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
