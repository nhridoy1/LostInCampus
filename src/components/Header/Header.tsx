import Link from "next/link";
import styles from "@/components/Header/Header.module.css";


export default function Header() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>LostInCampus</div>
                <ul className={styles['nav-links']}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/post">Posts</Link></li>

                </ul>
            </nav>
        </div>
    )
}