/**
 * Created by Daguang Li on 12/1/2017.
 */

export const updateLanguage = (value) => {
    return {
        type: "UPDATE_LANGUAGE",
        langKey: value
    }
};