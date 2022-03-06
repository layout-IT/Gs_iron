import {data} from "../assets/arrayOfLayouts/arrayOfLayouts";


export const getTestData = {
    getData () {
        return new Promise(resolve => setTimeout(() => {
            resolve(data)
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
