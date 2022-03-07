import React, {useState} from 'react';
import {Layout} from "./components/layout/layout";
import s from './App.module.scss'
import {RoomFilters} from "./components/filters/roomFilters";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {dataType} from "./api/apiTest";
import {getDataTC, setIdButtonAC} from "./redux/layout-reducer/layoutReducer";

function App () {
    const data = useSelector<RootState, Array<dataType>>(state => state.layoutReducer.data)
    const dispatch = useDispatch()


    const [filteringWindow, setFilteringWindow] = useState<boolean>(true)
    const sklonenie = (number: number, txt: Array<string>) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    const resetAll = () => {
        dispatch(getDataTC())
        dispatch(setIdButtonAC(''))
    }
    const removeTheFilteringWindow = () => {
        setFilteringWindow(!filteringWindow)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.header}>
                    <h1 className={s.title}>Найдено {data.length} {data.length ? sklonenie(data.length, ['планировка', 'планировки', 'планировок']) : 'планировок'}</h1>
                    <div className={s.headerRightSide}>
                        <div onClick={() => removeTheFilteringWindow()}
                             className={filteringWindow ? s.textFilter : s.withoutFilteringWindow}>Фильтр
                        </div>
                        <div onClick={() => resetAll()} className={s.textReset}>Сбросить всё</div>
                    </div>
                </div>
                <Layout/>
            </div>
            {filteringWindow && <RoomFilters/>}
        </div>

    );
}

export default App;
