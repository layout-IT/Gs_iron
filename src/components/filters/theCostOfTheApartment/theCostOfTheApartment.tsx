import s from './theCostOfTheApartment.module.scss'
import {Slider} from "@material-ui/core";
import {getFilteredsliderTC} from "../../../redux/layout-reducer/layoutReducer";
import {useState} from "react";
import {useDispatch} from "react-redux";

export const TheCostOfTheApartment = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState([1000000, 3000000]);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        dispatch(getFilteredsliderTC(value))
    };

    return <div className={s.wrapper}>
        <h3 className={s.title}>Стоимость, ₽</h3>
        <div className={s.items}>
            <span className={s.item}>от {value[0].toLocaleString('ru-RU')}</span>
            <span className={s.item}>от {value[1].toLocaleString('ru-RU')}</span>
        </div>
        <Slider
            min={1000000}
            max={6000000}
            value={value}
            step={500000}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
    </div>
}