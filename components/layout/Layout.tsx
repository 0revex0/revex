import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <main className={styles.container}>{children}</main>;
}