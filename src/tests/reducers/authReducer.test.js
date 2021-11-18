import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initialState = {
    checking: true,
    account: {}
}

describe('Pruebas en authReducer.js', () => {
    
    test('login tiene que guradar la sesion ', () => {

        const action = {
            type: types.login,
            payload: {
                uid: 'abc12946735289',
                name: 'fernando',
                email: 'example@gmail.com'
            }
        };
        
        const state = authReducer(initialState, action);
        expect(state.account).toEqual(action.payload);

    });

    test('checkingFinish debe poner el loader en false ', () => {
        
        const action = {
            type: types.checkingFinish,
            payload: false
        };

        const state = authReducer(initialState, action);
        expect(state.checking).toBe(false);

    });

    test('purgeAuth debe vaciar el estado', () => {
        
        const action = {
            type: types.purgeAuth
        };

        const state = authReducer(initialState, action);
        
        expect(state.checking).toBe(false);
        expect(state.account).toEqual({});

    });

    test('debe retornar el estado por defecto', () => {

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

});