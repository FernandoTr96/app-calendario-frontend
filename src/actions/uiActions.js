import { types } from "../types/types";

export const openModalEvents = ()=>(
    {
        type: types.uiOpenModalEvents,
        payload: true
    }
);

export const closeModalEvents = ()=>(
    {
        type: types.uiCloseModalEvents,
        payload: false
    }
);