/**
 * Created by Daguang Li on 11/28/2017.
 */
let loggerService = {
    log: (...msg) => {
        console.log(...msg);
    },
    info: (...msg) => {
        console.log(...msg);
    },
    warn: (...msg) => {
        console.warn(...msg);
    },
    error: (...msg) => {
        console.error(...msg);
    }
};
export default loggerService;