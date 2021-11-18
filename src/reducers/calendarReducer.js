import { types } from "../types/types";

const initialState = {
    eventList: [],
    activeNow: null,
    loader: false
};

export const calendarReducer = (state=initialState, action)=>{

    switch (action.type) {
        
        case types.fillEventList:   
        return {
            ...state,
            eventList: [
                ...action.payload
            ]
        }

        case types.activeEvent:
        return {
            ...state,
            activeNow: action.payload
        }

        case types.showLoader:
        return {
            ...state,
            loader: true
        }

        case types.hiddeLoader:
         return {
            ...state,
            loader: false
        }
    
        default:
        return state;
    }

}