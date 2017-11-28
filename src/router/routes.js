/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import Login from '../pages/login/login.component'
import Layout from '../pages/layout/layout.component'
import methods from '../common/methods'
import constants from '../common/constants'
import loggerService from '../common/services/logger'

function App(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require("../pages/home/home.component").default)
    }, 'home');
};

const dashboard = (location, cb) => {
    require.ensure([], require => {
        cb(null, require("../pages/dashboard/dashboard.component").default)
    }, 'dashboard');
};

const about = (location, cb) => {
    require.ensure([], require => {
        cb(null, require("../pages/about/about.component").default)
    }, 'about');
};

const onEnter = (nextState, replace) => {
    let userToken = methods.getLocalStorage(constants.localKey.userToken);
    let nowTime = (new Date()).getTime();
    let diff = nowTime - userToken;
    loggerService.log("diff:", diff);

    // 模拟Token保存2个小时
    if (diff > constants.INVALID_TIME) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

const routes = (
    <Router history={browserHistory}>
        <Route path="/home" component={Layout} onEnter={onEnter}>
            <IndexRoute getComponent={home} onEnter={onEnter}/>
            <Route path="/home" getComponent={home} onEnter={onEnter}/>
            <Route path="/dashboard" getComponent={dashboard} onEnter={onEnter}/>
            <Route path="/about" getComponent={about} onEnter={onEnter}/>
        </Route>
        <Route path="/login" component={App}>
            <IndexRoute component={Login}/>
        </Route>
        <Redirect from="*" to="/home" />
    </Router>
);

export default routes;