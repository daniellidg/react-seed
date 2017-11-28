/**
 * Created by Daguang Li on 11/27/2017.
 */
import 'whatwg-fetch'

let fetchService = {
    get: (url) => {
        return fetch(url).then((response) => {
            return response.json();
        });
    },
    post: (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        });
    }
};
export default fetchService;