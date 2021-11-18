import { types } from "../../types/types";

describe('Pruebas en types.js', () => {
    
    test('Los types deben ser iguales', () => {

        expect(types).toEqual({
            uiOpenModalEvents: '[ui] open modal events',
            uiCloseModalEvents: '[ui] close modal events',
            
            fillEventList: '[event] fill event list',
            activeEvent: '[event] active',
            showLoader: '[event] loader true',
            hiddeLoader: '[event] loader false',
        
            login: '[auth] login',
            checkingFinish: '[auth] check finish',
            logout: '[auth] logout',
            purgeAuth: '[auth] purge state'
        });
        
    });

});