import Link from "next/link";
import styles from "@/components/Header/Header.module.css";
import Image from "next/image";


export default function Header() {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="LostInCampus"
                        width={60}
                        height={60}
                        className="rounded-full"
                        priority
                    />
                </Link>
                <ul className={styles['nav-links']}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/posts">Posts</Link></li>

                </ul>
            </nav>
        </div>
    )
}