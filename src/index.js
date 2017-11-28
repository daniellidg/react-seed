/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './router/routes'
import store from "./redux/store/configureStore"

import 'antd/dist/antd.css'
import './style/style.css'

ReactDOM.render((
    <Provider store={store}>
        {routes}
    </Provider>
), document.getElementById("root"));