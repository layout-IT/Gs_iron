import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./store/store";
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

