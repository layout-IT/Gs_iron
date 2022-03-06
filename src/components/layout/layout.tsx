import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './layout.module.scss'
import {getDataTC} from "../../redux/layout-reducer/layoutReducer";
import {RootState} from "../../store/store";
import {dataType} from "../../api/apiTest";
import {v1} from 'uuid';

export const Layout = () => {
    const data = useSelector<RootState, Array<dataType>>(state => state.layoutReducer.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataTC())
    })
    return <div className={s.wrapper}>
        {data.map((element) =>
            <div key={element.id} className={s.item}>
                <h3>{element.name + ', ' + element.square + " кв.м"}</h3>
                <img className={s.image} src={Number(element.square) > 25 ? element.photos[1].photoLink : element.photos[0].photoLink}
                     alt="photo"/>
                <div>{element.housingComplexName}</div>
                <div>{element.sameLayoutFlatCount + ' квартир' + ', ' + 'от ' + element.price + ' руб.'}</div>
            </div>
        )}
    </div>
}