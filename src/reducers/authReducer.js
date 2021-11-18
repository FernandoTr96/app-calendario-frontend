import { types } from "../types/types";

const initialState = {
    checking: true,
    account: {}
}

export const authReducer = (state=initialState, action)=>{

    switch (action.type) {

        case types.login:
        return {
            ...state,
            checking: false,
            account: {
                ...action.payload
            }
        };

        case types.checkingFinish:
        return {
            ...state,
            checking: false
        };

        case types.purgeAuth:
        return {
            checking: false,
            account:{}
        };

        default:
        return state;
    }

}

