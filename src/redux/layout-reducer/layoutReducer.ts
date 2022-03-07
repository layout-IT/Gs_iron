import {Dispatch} from "redux"
import {dataType, getTestData} from "../../api/apiTest";

type StateType = typeof initialState
type ActionTypes =
    ReturnType<typeof setDataAC> |
    ReturnType<typeof setFilteredDataAC> |
    ReturnType<typeof setIdButtonAC> |
    ReturnType<typeof preloaderAC> |
    ReturnType<typeof filteredSliderAC>

const initialState = {
    data: [] as Array<dataType>,
    fiter: '1',
    idButton: '',
    preloader: false
}
export const layoutReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "SET-DATA" :
            return {...state, data: action.res}
        case "SET-FILTERED-DATA":
            return {...state, data: action.res}
        case "SET-ID-BUTTON":
            return {...state, idButton: action.id}
        case "PRELOADER":
            return {...state, preloader: action.preloader}
        case "FILTERED-SLIDER":
            return {...state, data: action.res}

        default:
            return state
    }
}

export const setDataAC = (res: Array<dataType>) => {
    return {
        type: 'SET-DATA',
        res,
    } as const
}
export const setFilteredDataAC = (res: Array<dataType>) => {
    return {
        type: 'SET-FILTERED-DATA',
        res,
    } as const
}
export const setIdButtonAC = (id: string) => {
    return {
        type: 'SET-ID-BUTTON',
        id,
    } as const
}
export const preloaderAC = (preloader: boolean) => {
    return {
        type: 'PRELOADER',
        preloader,
    } as const
}
export const filteredSliderAC = (res: Array<dataType>) => {
    return {
        type: 'FILTERED-SLIDER',
        res,
    } as const
}

export const getDataTC = () => (dispatch: Dispatch) => {
    dispatch(preloaderAC(true))
    getTestData.getData()
        .then((res) => {
            dispatch(setDataAC(res as Array<dataType>))

        })
        .finally(() => {
            dispatch(preloaderAC(false))
        })
}
export const getFilteredDataByLayoutFeaturesTC = (name: string) => (dispatch: Dispatch) => {
    dispatch(preloaderAC(true))
    getTestData.filteringDataByLayoutFeatures(name)
        .then((res) => {
            dispatch(setFilteredDataAC(res as Array<dataType>))

        })
        .finally(() => {
            dispatch(preloaderAC(false))
        })
}
export const getFilteredlayoutsTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(preloaderAC(true))
    getTestData.filterDataByRooms(id)
        .then((res) => {
            dispatch(setFilteredDataAC(res as Array<dataType>))

        })
        .finally(() => {
            dispatch(preloaderAC(false))
        })
}
export const getFilteredsliderTC = (value: number[]) => (dispatch: Dispatch) => {
    dispatch(preloaderAC(true))
    getTestData.filterSlider(value)
        .then((res) => {
            dispatch(setFilteredDataAC(res as Array<dataType>))

        })
        .finally(() => {
            dispatch(preloaderAC(false))
        })
}
