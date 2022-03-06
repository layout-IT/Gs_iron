import {Dispatch} from "redux"
import {dataType, getTestData} from "../../api/apiTest";


type StateType = typeof initialState
type ActionTypes = ReturnType<typeof setDataAC>

const initialState = {
    data: [] as Array<dataType>
}
export const layoutReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "SET-DATA" :
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

export const getDataTC = () => (dispatch: Dispatch) => {
    return getTestData.getData()
        .then((res) => {
            dispatch(setDataAC(res as Array<dataType>))
        })
}
