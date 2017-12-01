/**
 * Created by Daguang Li on 11/27/2017.
 */
let methods = {
    /**
     * 只能输入英文
     *
     * @param {any} str
     * @returns
     */
    checkEng(str) {
        var reg = new RegExp(/^[A-Za-z]+$/);
        return str && reg.test(str);
    },
    /**
     * 参数格式化
     *
     * @param {any} data
     * @returns
     */
    paramFormat(data) {
        let paramArr = [];
        let paramStr = '';
        for(let attr in data) {
            paramArr.push(attr + '=' + data[attr]);
        }
        paramStr = paramArr.join('&');
        return paramStr ? '?' + paramStr : paramStr;
    },
    /**
     * 本地数据存储
     *
     * @param {any} key
     * @param {any} value
     * @returns
     */
    setLocalStorage(key, value) {
        return localStorage.setItem(key, value);
    },
    /**
     * 本地数据读取
     *
     * @param {any} key
     * @returns
     */
    getLocalStorage(key) {
        return localStorage.getItem(key) && localStorage.getItem(key) !== 'null' ? localStorage.getItem(key) : null;
    },
    /**
     * 删除本地数据
     *
     * @param {any} key
     * @returns
     */
    removeLocalStorage(key) {
        if(arguments.length === 1) {
            return localStorage.removeItem(key);
        } else {
            return localStorage.clear();
        }
    },
    getDefaultLanguage() {
        switch(navigator.language.split('-')[0]) {
            case 'en':
                return 'en';
            case 'zh':
                return 'zh';
            default:
                return 'en';
        }
    }
};

export default methods;