import Header from './header'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'


export default function Layout({children,home}){
    return(
    <div className={styles.container}>

          <Head>
              <title>Ecommerce</title>
              <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <main className={styles.main}>
          {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
            {children}
          </main>

    </div>
    )
}