import Layout from '../components/Layout'
import {getAllFurnitureIds, getFurnitureData} from '../lib/furniture'

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
        {postData.name}
    </Layout>
} 