/**
 * Created by Daguang Li on 11/27/2017.
 */
import { combineReducers } from "redux"
import login from "./login"
import loading from "./loading"
import layout from "./layout"
import common from "./common"

const rootReducer = combineReducers({
    login,
    loading,
    layout,
    common
});

export default rootReducer;