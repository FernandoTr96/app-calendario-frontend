import { types } from "../types/types";

const initialState = {

    modalEventsOpen: false

};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.uiOpenModalEvents:
        return {
            ...state,
            modalEventsOpen: action.payload
        };


        case types.uiCloseModalEvents:
        return {
            ...state,
            modalEventsOpen: action.payload
        };


        default:
        return state;
    }
}