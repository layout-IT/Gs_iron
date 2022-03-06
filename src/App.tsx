import React from 'react';
import {Layout} from "./components/layout/layout";
import s from './App.module.scss'
import {Filters} from "./components/filters/filters";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {dataType} from "./api/apiTest";

function App () {
    const data = useSelector<RootState, Array<dataType>>(state => state.layoutReducer.data)

    function sklonenie (number: number, txt: Array<string>) {
        var cases = [2, 0, 1, 1, 1, 2];
        return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.header}>
                    <h1 className={s.title}>Найдено {data.length} {data.length ? sklonenie(data.length, ['планировка', 'планировки', 'планировок']) : 'планировок'}</h1>
                    <div className={s.headerRightSide}>
                        <div className={s.textFilter}>Фильтр</div>
                        <div className={s.textReset}>Сбросить всё</div>
                    </div>
                </div>
                <Layout/>
            </div>
            <Filters/>
        </div>

    );
}

export default App;
