import Link from 'next/link'
import styles from '../styles.module.css'

export default function Header(props){
    return(
        <nav>
            <Link href='/'>
                <a className={styles.link}><h2>Home</h2></a>
            </Link>
            <Link href='/about'>
                <a className={styles.link}><h2>About</h2></a>
            </Link>
            
        </nav>
    )
}