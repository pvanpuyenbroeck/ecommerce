import Layout from '../components/Layout'
import {getAllFurnitureIds, getFurnitureData} from '../lib/furniture'
import styles from '../styles/furnitureStyle.module.css'
import Image from 'next/image'

export async function getStaticPaths() {
    const paths = getAllFurnitureIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const furnitureData = getFurnitureData(params.id);
    return {
      props: {
        postData:furnitureData
      }
    }
  }

export default function furnitureDetails({postData}){
    return <Layout>
        <div>
            
        </div>
        <div className={styles.furnitureContainer}>
            <div className={styles.fullImage}>
                <Image
                    src={'/img/furniture/' + postData.imgsrc}
                    alt={postData.name}
                    layout='fill'
                    objectFit='cover'
                    quality='50'
                />
            </div>
            <div class={styles.furnitureInfo}>
                <div className={styles.name}>{postData.name}</div>
                <div className={styles.description}>{postData.description}</div>
                <div className={styles.price}>{'€' + postData.price}</div>
            </div>
        </div>
    </Layout>
} 