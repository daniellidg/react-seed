/**
 * Created by Daguang Li on 11/27/2017.
 */
let initState = {
    loading: false
};

export default function loading(state=initState, action) {
    switch (action.type) {
        case "LOADING":
            return {loading: action.loading};
        default:
            return state;
    }
}