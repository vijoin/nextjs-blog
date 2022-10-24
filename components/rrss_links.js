import Image from "next/image";
import styles from "./rrss_links.module.css"

export default function RRSSLinks() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a href="https://github.com/vijoin"><Image src="/images/github.png" width={50} height={50} /></a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/vijoin"><Image src="/images/linkedin.png" width={50} height={50} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/vijoin"><Image src="/images/twitter.png" width={50} height={50} /></a>
                </li>
            </ul>
        </div>
    )
}