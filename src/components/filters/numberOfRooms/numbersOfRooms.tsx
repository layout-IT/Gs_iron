import s from './numbersOfRooms.module.scss'
import {useState} from "react";

type buttonType = {
    id: number,
    name: string
}

export const NumbersOfRooms = () => {
    const [state, setState] = useState<Array<buttonType>>([
        {id: 1, name: 'C'},
        {id: 2, name: '1'},
        {id: 3, name: '1+'},
        {id: 4, name: '2'},
        {id: 5, name: '2+'},
        {id: 6, name: '3'}

    ])
    const [isActive, setIsActive] = useState<boolean>(false)
    const changeTheColorOfButton = (id: number) => {
        if (id) {
            setIsActive(!isActive)
        }

    }
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div>
                количество комнат
            </div>
            {state.map((element) => <button key={element.id}
                                            className={!isActive ? s.button : s.buttonActive}
                                            onClick={() => changeTheColorOfButton(element.id)}>{element.name}</button>)}
        </div>

    </div>
}