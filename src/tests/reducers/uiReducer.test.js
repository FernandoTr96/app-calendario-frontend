import { uiReducer } from "../../reducers/uiReducer";
import { types } from "../../types/types";

const initialState = {
    modalEventsOpen: false
};

describe('Pruebas en uiReducer.js', () => {
    
    test('uiOpenModalEvents debe cambiar el estado a true', () => {
        
        const state = uiReducer(initialState,{
            type: types.uiOpenModalEvents,
            payload: true
        });

        expect(state.modalEventsOpen).toBe(true);

    });

        
    test('uiCloseModalEvents debe cambiar el estado a false', () => {

        const state = uiReducer(initialState,{
            type: types.uiCloseModalEvents,
            payload: false
        });

        expect(state.modalEventsOpen).toBe(false);
        
    });

    test('debe retornar el estado por defecto', () => {
        
        const state = uiReducer(initialState,{});
        expect(state).toEqual(initialState);

    });

});