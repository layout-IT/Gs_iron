import s from './layoutFeatures.module.scss'
import {useState} from "react";

type buttonType = {
    id: number,
    name: string
}

export const LayoutFeatures = () => {
    const [state, setState] = useState<Array<buttonType>>([
        {id: 1, name: '2 и более санузла'},
        {id: 2, name: 'Большая лоджия'},
        {id: 3, name: 'Гардеробная'},
        {id: 4, name: 'Кухня-гостиная'},
        {id: 5, name: 'Лоджия'},
        {id: 6, name: 'Постирочная'}

    ])
    const [isActive, setIsActive] = useState<boolean>(false)
    const [showMore, setShowMore] = useState<boolean>(false)
    const changeTheColorOfButton = (id: number) => {
        if (id) {
            setIsActive(!isActive)
        }

    }
    const changeShowMore = () => {
        setShowMore(!showMore)
    }
    return <div className={s.wrapper}>
        <div className={s.container}>
            <h4 className={s.title}>
                Особенности планировки
            </h4>
            {state.map((element) => <label key={element.id}>
                <input type="checkbox"/>{element.name}
            </label>)}
            {!showMore ? <div className={s.text} onClick={() => changeShowMore()}>Показать все</div> :
                <div className={s.nextArray} > {state.map((element) => <label key={element.id}><input type="checkbox"/>{element.name}
                </label>)}</div>}
        </div>


    </div>
}