import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './layout.module.scss'
import {getDataTC} from "../../redux/layout-reducer/layoutReducer";
import {RootState} from "../../store/store";
import {dataType} from "../../api/apiTest";
import {ApartmentCard} from "./apartmentCard/apartmentCard";
import preloaderGif from '../../assets/img/preloader.gif'

export const Layout = () => {
    const data = useSelector<RootState, Array<dataType>>(state => state.layoutReducer.data)
    const preloader = useSelector<RootState, boolean>(state => state.layoutReducer.preloader)
    const [minPrice, setMinPrice] = useState<boolean>(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataTC())
    }, [])
    const priceFilter = () => {
        setMinPrice(!minPrice)
    }
    let sortData = [...data].sort((prev, next) => prev.price - next.price)

    return <>
        {preloader ?
            <img className={s.imgPreloader} src={preloaderGif} alt="preloader"/>
            : <div className={s.wrapper}>
                <div onClick={() => priceFilter()}
                     className={s.priceFilter}>{!minPrice ? "Сначала дешевле" : "Без сортировки"}</div>
                <div className={s.container}>
                    {!minPrice ?
                        data.map((element) =>
                            <ApartmentCard key={element.id}
                                           square={element.square}
                                           photos={element.photos}
                                           name={element.name}
                                           housingComplexName={element.housingComplexName}
                                           sameLayoutFlatCount={element.sameLayoutFlatCount}
                                           price={element.price}
                            />
                        )
                        :
                        sortData.map((element) =>
                            <ApartmentCard key={element.id}
                                           square={element.square}
                                           photos={element.photos}
                                           name={element.name}
                                           housingComplexName={element.housingComplexName}
                                           sameLayoutFlatCount={element.sameLayoutFlatCount}
                                           price={element.price}
                            />
                        )
                    }
                </div>
            </div>}</>
}