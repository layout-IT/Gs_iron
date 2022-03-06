import React from 'react';
import {Layout} from "./components/layout/layout";
import s from './App.module.scss'
import {Filters} from "./components/filters/filters";
function App () {
    return (
        <div className={s.wrapper}>
            <Layout/>
            <Filters/>
        </div>
    );
}

export default App;
