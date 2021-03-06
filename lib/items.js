import fs from "fs";
import path from "path";
import {allFurniture} from './furniture';
import axios from 'axios'

const furnitureDirectory = path.join(process.cwd(), "public/img/furniture");

export async function getAllfurnitureIds() {
    const furnitureIds = await axios.get('http://localhost:1337/furnituredetails').then(item => {
        return item.id;
    })

    return furnitureIds.map((id) => {
        return {
            params: {
                id: id,
            },
        };
    });
    // const fileNames = fs.readdirSync(furnitureDirectory);
    // console.log(fileNames)
    // return fileNames.map((file) => {
    //     return {
    //         params: {
    //             id: file,
    //         },
    //     };
    // });
}

export async function getAllfurnitureObjects() {
    const result = await axios.get('http://localhost:1337/furnituredetails').then(item => {
        console.log(item.data);
        return {
            params: {
                ...item.data
            },
        };

    })
    return result;

    // return allFurniture.map((furniture) => {
    //     return {
    //         params: {
    //             ...furniture
    //         },
    //     };
    // });
}

export async function getAllPostIds() {
    const furnitureIds = await axios.get('http://localhost:1337/furnituredetails').then(item => {
        return item.id;
    })

    return furnitureIds.map((id) => {
        return {
            params: {
                id: id,
            },
        };
    });
}


// export async function getFurnitureDataStrapi(){
//     const result = await axios.get('http://localhost:1337/furnituredetails').then(response => {
//         console.log(response.data); 
//     }, error => {
//         console.log(error)
//     })
// }
