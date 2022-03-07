import s from "../layout.module.scss";
import {photosType} from "../../../api/apiTest";
import React from "react";

type apartmentCardType = {
    square: number
    photos: Array<photosType>
    name: string
    housingComplexName: string
    sameLayoutFlatCount: number
    price: number
}
export const ApartmentCard = React.memo((props: apartmentCardType) => {
    return <div className={s.column}>
        <div className={s.item}>
            <img className={s.image}
                 src={props.square > 25 ? props.photos[1].photoLink : props.photos[0].photoLink}
                 alt="photo"/>
            <h3>{`${props.name} , ${props.square} кв.м`}</h3>
            <div>{props.housingComplexName}</div>
            <div>{`${props.sameLayoutFlatCount} квартир , от  ${props.price.toLocaleString('ru-RU')} руб.`}</div>
        </div>
    </div>
})