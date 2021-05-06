import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.leftNavHeader}>
                <div className={styles.navButton}>Portfolio</div>
                <div className={styles.navButton}>New Projects</div>
                <div className={styles.navButton}>About us</div>
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
