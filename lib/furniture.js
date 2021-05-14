

class Furniture{
    constructor(name,imgsrc,description,price){
        this.name = name,
        this.imgsrc = imgsrc,
        this.description = description,
        this.price = price
        this.id = this.name.replace(' ','');
    }
}

export const allFurniture = [
    new Furniture("Magone Chair", "chairs.jpg","Mooie zware stoel, past bij alles","250"),
    new Furniture("Green Lagoon", "green_sofa.jpg","Green sofa, for the greenies","1300"),
    new Furniture("Orange Fire", "orange_sofa.jpg","Give color to your home","1500"),
    new Furniture("Wood boy", "wooden_chair_and_table.jpg","Beautiful wooden chair, just sit and relax","125.99")
]

export const getAllFurnitureIds = () => {
    return allFurniture.map(furniture => {
        return {
            params:{
                id: furniture.id
            }
        }
    })
}

export const getFurnitureData = (id) => {
    const result = allFurniture.find((item) => {
        return item.id === id;
    })
    return {
        id,
        ...result
    };
}

