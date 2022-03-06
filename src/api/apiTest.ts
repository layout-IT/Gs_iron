import jsonFile from "../assets/arrayOfLayouts/arrayOfLayouts.json";

export const getTestData = {
    getData () {
        return new Promise(resolve => setTimeout(() => {
            resolve(jsonFile)
        }, 2000))
    }
}
export type dataType = {
    id: number,
    name: string,
    housingComplexName: string,
    planLink: string,
    photos: Array<photosType>,
    sameLayoutFlatCount: number,
    mibPrise: number,
    numberOfMooms: number,
    bathrooms: false,
    bathroom: true,
    largeLoggia: true,
    loggia: true,
    laundryRoom: true,
    project: string,
    price: number,
    square: number,
    deadlineForDelivery: string,
    ceilingHeight: string
}

export type photosType = {
    photoLink: string
}
