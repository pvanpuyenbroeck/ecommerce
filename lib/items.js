import fs from "fs";
import path from "path";
import {allFurniture} from './furniture';

const furnitureDirectory = path.join(process.cwd(), "public/img/furniture");

export async function getAllfurnitureIds() {
    const fileNames = fs.readdirSync(furnitureDirectory);
    console.log(fileNames)
    return fileNames.map((file) => {
        return {
            params: {
                id: file,
            },
        };
    });
}

export async function getAllfurnitureObjects() {

    return allFurniture.map((furniture) => {
        return {
            params: {
                ...furniture
            },
        };
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}


