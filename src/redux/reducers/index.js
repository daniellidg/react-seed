/**
 * Created by Daguang Li on 11/27/2017.
 */
import { combineReducers } from "redux"
import login from "./login"
import loading from "./loading"
import layout from "./layout"

const rootReducer = combineReducers({
    login,
    loading,
    layout
});

export default rootReducer;