import fs from "fs";
import path from "path";

const furnitureDirectory = path.join(process.cwd(), "public/img/furniture");

export function getAllfurnitureIds() {
    const fileNames = fs.readdirSync(furnitureDirectory);
    return fileNames.map((file) => {
        return {
            params: {
                id: file,
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
