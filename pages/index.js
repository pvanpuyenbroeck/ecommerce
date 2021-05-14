import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import ImageBoard from '../components/imageBoard/imageBoard'
import Layout from '../components/Layout';
import {getAllfurnitureObjects, getFurnitureDataStrapi} from '../lib/items';

// export async function getStaticPaths() {
//     const paths = await getAllfurnitureIds();
//     console.log(paths);
//     return {
//         paths,
//         fallback: false,
//     };
// }

export async function getStaticProps({ params }) {
    let furnitureItems = await getAllfurnitureObjects();
    getFurnitureDataStrapi();
    return {
        props: {
            postData: furnitureItems,
        },
    };
}

export default function Home({postData}) {
  return (
        <Layout home>
            <ImageBoard images={postData}/>
        </Layout>
    //   <div className={styles.container}>
    //       <Head>
    //           <title>Create Next App</title>
    //           <link rel='icon' href='/favicon.ico' />
    //       </Head>
    //       <Header />
    //       <main className={styles.main}>
    //         <ImageBoard images={postData}/>
    //       </main>

    //       <footer className={styles.footer}>
    //           <a
    //               href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //           >
    //               Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
    //           </a>
    //       </footer>
    //   </div>
  );
}
