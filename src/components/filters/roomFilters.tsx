import s from './filters.module.scss'
import {NumbersOfRooms} from "./numberOfRooms/numbersOfRooms";
import {LayoutFeatures} from "./layoutFeatures/layoutFeatures";
import {TheCostOfTheApartment} from "./theCostOfTheApartment/theCostOfTheApartment";

export const RoomFilters = () => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <NumbersOfRooms/>
            <LayoutFeatures/>
            <TheCostOfTheApartment/>
        </div>
    </div>
}