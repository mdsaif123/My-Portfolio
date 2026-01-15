import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
    title: "404 | Page Not Found",
};

export default function NotFound() {
    return (
        <main className={styles.page}>
            <div className={styles.box}>
                <h1 className={styles.code}> <span className={styles.spanRedFour}>4</span>0<span className={styles.spanRedFour}>4</span></h1>
                <p className={styles.text}>Page Not Found</p>
                <Link className={styles.link} href="/">
                    Go Home
                </Link>
            </div>
        </main>
    );
}
