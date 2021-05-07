import Header from './header'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Layout({children}){
    return(
    <div className={styles.container}>
          <Head>
              <title>Create Next App</title>
              <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
    </div>
    )
}