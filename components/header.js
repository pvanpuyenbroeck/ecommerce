import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.leftNavHeader}>
                <div className={styles.navButton}><Link href='/portfolio'>Portfolio</Link></div>
                <div className={styles.navButton}><Link href='/NewProjects'>New Projects</Link></div>
                <div className={styles.navButton}><Link href='/AboutUs'>About us</Link></div>
            </div>
            <div>
                <div className={styles.logo}>LOGO</div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Header;
