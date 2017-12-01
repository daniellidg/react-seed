/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Translate from './router/translate'
import store from "./redux/store/configureStore"

import 'antd/dist/antd.css'
import './style/style.css'

ReactDOM.render((
    <Provider store={store}>
        <Translate />
    </Provider>
), document.getElementById("root"));