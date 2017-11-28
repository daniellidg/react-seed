/**
 * Created by Daguang Li on 11/27/2017.
 */
import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunk from "redux-thunk";
import loggerService from '../../common/services/logger'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
loggerService.log("store: ", store.getState());

export default store;