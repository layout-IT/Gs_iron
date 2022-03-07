import s from './numbersOfRooms.module.scss'
import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {getFilteredlayoutsTC, setIdButtonAC} from "../../../redux/layout-reducer/layoutReducer";

type buttonType = {
    id: string,
    name: string
}

export const NumbersOfRooms = () => {
    const idButton = useSelector<RootState, string>(state => state.layoutReducer.idButton)
    const dispatch = useDispatch()
    const [state, setState] = useState<Array<buttonType>>([
        {id: 'C', name: 'C'},
        {id: '1', name: '1'},
        {id: '1+', name: '1+'},
        {id: '2', name: '2'},
        {id: '2+', name: '2+'},
        {id: '3', name: '3'},
        {id: '3+', name: '3+'},
        {id: '4', name: '4'},
    ])

    const changeTheColorOfButton = useCallback((id: string) => {
            if (id) {
                if (idButton !== id) {
                    dispatch(setIdButtonAC(id))
                    dispatch(getFilteredlayoutsTC(id))
                } else {
                    dispatch(setIdButtonAC(''))
                }
            }
        }, [idButton]
    )

    return <div className={s.wrapper}>
        <div className={s.container}>
            <div>
                Количество комнат
            </div>
            {state.map((element) => <button key={element.id}
                                            className={idButton !== element.id ? s.button : s.buttonActive}
                                            onClick={() => changeTheColorOfButton(element.id)}>{element.name}</button>)}
        </div>
    </div>
}