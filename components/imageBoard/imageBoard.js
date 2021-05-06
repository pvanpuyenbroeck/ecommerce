import React from 'react'
import ImageElement from './imageboardElement/imageboardElement';
import {getAllfurnitureIds} from '../../lib/items';



export default function imageBoard(){
    const images = {

    }

    return(
        <div>  
            {/* {getAllfurnitureIds()} */}
            test
        </div>
    )
}

export async function getStaticPaths() {
    const paths = await getAllfurnitureIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // const postData = await getPostData(params.id);
    const postData = {
        test: "test",
    };
    return {
        props: {
            postData,
        },
    };
}