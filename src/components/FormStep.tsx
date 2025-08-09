import styles from "./FormStep.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function FormStep({ title, children }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
