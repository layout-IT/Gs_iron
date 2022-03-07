import {data} from "../assets/arrayOfLayouts/arrayOfLayouts";

export const getTestData = {
    getData () {
        return new Promise(resolve => setTimeout(() => {
            resolve(data)
        }, 2000))
    },

    filterDataByRooms (id: string) {
        let arrayForFiltering = () => {
            let filteredArray
            if (id === 'C') {
                filteredArray = data.filter((n) => n.numberOfRooms === 0)
            } else if (id === '1') {
                filteredArray = data.filter((n) => n.numberOfRooms === 1)
            } else if (id === '1+') {
                filteredArray = data.filter((n) => n.numberOfRooms >= 1)
            } else if (id === '2') {
                filteredArray = data.filter((n) => n.numberOfRooms === 2)
            } else if (id === '2+') {
                filteredArray = data.filter((n) => n.numberOfRooms >= 2)
            } else if (id === '3') {
                filteredArray = data.filter((n) => n.numberOfRooms === 3)
            } else if (id === '3+') {
                filteredArray = data.filter((n) => n.numberOfRooms >= 3)
            } else if (id === '4') {
                filteredArray = data.filter((n) => n.numberOfRooms === 4)
            }
            return filteredArray
        }
        return new Promise(resolve => setTimeout(() => {
            resolve(arrayForFiltering())
        }, 2000))
    },

    filteringDataByLayoutFeatures (name: string) {
        let arrayForFiltering = () => {
            let filteredArray
            if (name === '2 и более санузла') {
                filteredArray = data.filter((n) => n.bathrooms)
            } else if (name === 'Большая лоджия') {
                filteredArray = data.filter((n) => n.largeLoggia)
            } else if (name === 'Гардеробная') {
                filteredArray = data.filter((n) => n.dressingRoom)
            } else if (name === 'Лоджия') {
                filteredArray = data.filter((n) => n.loggia)
            } else if (name === 'Постирочная') {
                filteredArray = data.filter((n) => n.laundryRoom)
            }
            return filteredArray
        }
        return new Promise(resolve => setTimeout(() => {
            resolve(arrayForFiltering())
        }, 2000))
    },

    filterSlider (value: number[]) {
        console.log(value)
        let arrayForFiltering = () => {
            let filteredArray
            if (value) {
                filteredArray = data.filter((n) => value[0] <= n.price && n.price >= value[1])
                console.log(filteredArray)
            }
            return filteredArray
        }
        return new Promise(resolve => setTimeout(() => {
            resolve(arrayForFiltering())
        }, 2000))
    }
}

export type dataType = {
    id: number,
    name: string,
    housingComplexName: string,
    planLink: string,
    drassingRooms: boolean
    photos: Array<photosType>,
    sameLayoutFlatCount: number,
    mibPrise: number,
    numberOfRooms: number,
    bathrooms: boolean,
    bathroom: boolean,
    largeLoggia: boolean,
    loggia: boolean,
    laundryRoom: boolean,
    project: string,
    price: number,
    square: number,
    deadlineForDelivery: string,
    ceilingHeight: string
}

export type photosType = {
    photoLink: string
}
