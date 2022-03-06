import s from './filters.module.scss'
import {NumbersOfRooms} from "./numberOfRooms/numbersOfRooms";
import {LayoutFeatures} from "./layoutFeatures/layoutFeatures";

export const Filters = () => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <NumbersOfRooms/>
            <LayoutFeatures/>
        </div>

    </div>
}