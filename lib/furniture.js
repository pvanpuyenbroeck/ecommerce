import axios from 'axios'

class Furniture{
    constructor(name,imgsrc,description,price, id){
        this.name = name,
        this.imgsrc = imgsrc,
        this.description = description,
        this.price = price
        this.id = id;
    }
}

export const allFurniture = [
    new Furniture("Magone Chair", "chairs.jpg","Mooie zware stoel, past bij alles","250"),
    new Furniture("Green Lagoon", "green_sofa.jpg","Green sofa, for the greenies","1300"),
    new Furniture("Orange Fire", "orange_sofa.jpg","Give color to your home","1500"),
    new Furniture("Wood boy", "wooden_chair_and_table.jpg","Beautiful wooden chair, just sit and relax","125.99")
]

export async function getAllFurnitureIds(){
    const furnitureIds = await axios.get('http://localhost:1337/furnituredetails').then(item => {
        return item.data;
    })

    return furnitureIds.map((id) => {
        console.log(id);
        return {
            params: {
                id: id.titel,
            },
        };
    })
    // return allFurniture.map(furniture => {
    //     return {
    //         params:{
    //             id: furniture.id
    //         }
    //     }
    // })
}

export async function getFurnitureData(id){
    const result = await axios.get('http://localhost:1337/furnituredetails').then(response => {
        let furnitureResult= response.data.find(furniture => {
           return furniture.titel == id;
        });
        return  new Furniture(furnitureResult.titel,'http://localhost:1337' + furnitureResult.Afbeelding.url,furnitureResult.omschrijving,furnitureResult.PrijsInEuro, furnitureResult.titel);
    }, error => {
        allFurniture.find((item) => {
            return item.id === id;
        })
    });
    return {
        id,
        ...result
    };
}

export async function getAllfurnitureObjects() {
    return await axios.get('http://localhost:1337/furnituredetails').then(items => {
        return items.data.map(item => {
            const furnitureItem = new Furniture(item.titel,'http://localhost:1337' + item.Afbeelding.url,item.omschrijving,item.PrijsInEuro, item.id)
            return {
                params:{
                    ...furnitureItem
                }
            }
        }) 
    })
    };

    // return allFurniture.map((furniture) => {
    //     return {
    //         params: {
    //             ...furniture
    //         },
    //     };
    // });

