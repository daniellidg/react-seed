/**
 * Created by Daguang Li on 11/28/2017.
 */

let initState = {
    title: ""
};
export default function setTitle(state=initState, action) {
    switch (action.type) {
        case "SET_TITLE":
            return {title: action.title};
        default:
            return state;
    }
}