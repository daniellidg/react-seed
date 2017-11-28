/**
 * Created by Daguang Li on 11/27/2017.
 */
let initState = {
    loginInfo: {
        userName: "",
        password: ""
    }
};

export default function login(state=initState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { loginInfo: action.res};
        default:
            return state;
    }
}