import configure from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';
import { registerAccount, startLoginWithEmailAndPassword, startChecking } from '../../actions/authActions';
import * as fetch from '../../helpers/fetch';
import { toast } from 'react-toastify';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configure(middlewares);
const state = {};
let store = mockStore(state);

Storage.prototype.setItem = jest.fn();
jest.mock('react-toastify', ()=>({
    toast: {
        error: jest.fn()
    }
}))

describe('Pruebas en authActions.js', () => {

    beforeEach(()=>{
        store = mockStore(state);
        jest.clearAllMocks();
    })
    
    test('startLoginWithEmailAndPassword debe iniciar sesion correctamente', async () => {

        await store.dispatch(
            startLoginWithEmailAndPassword(
                'test@gmail.com',
                '54321haloO'
            )
        );

        const actions = store.getActions();

        // console.log(actions);
        expect(actions[0]).toEqual(
            {
                type: types.login,
                payload: {
                    uid: expect.any(String),
                    name: expect.any(String),
                    email: expect.any(String)
                }
            }
        );
        
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('calendarAppToken', expect.any(String));
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

    });

    test('startLoginWithEmailAndPassword debe mostrar el mensaje de error', async () => {
        
        await store.dispatch(
            startLoginWithEmailAndPassword(
                'test@gmail.com',
                'password erronea'
            )
        );

        expect(toast.error).toHaveBeenCalled();

    });

    test('registerAccount debe registrar un usuario', async () => {
        
        const userdata = {
            name: "fernando",
            email: "example@gmail.com",
            password: "54321haloO",
            confirm_password: "54321haloO"
        };

        fetch.fetchWithoutToken = jest.fn(()=>({
            json(){
                return {
                    ok: true,
                    uid: "abc123467889000",
                    name: "fernando",
                    email: "example@gmail.com",
                    token: "abc1345668678686787678"
                }
            }
        }))

        await store.dispatch(registerAccount(userdata));

        const actions = store.getActions();

        // console.log(actions);
        expect(actions[0]).toEqual(
            {
                type: types.login,
                payload: {
                    uid: expect.any(String),
                    name: expect.any(String),
                    email: expect.any(String)
                }
            }
        );

    });

    test('startChecking debe revalidar el token ', async () => {

        fetch.fetchWithToken = jest.fn(()=>({
            json(){
                return {
                    ok: true,
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MThlY2U3MjQyZTcwOTkxMTQ1Mjc4NDYiLCJuYW1lIjoiRmVybmFuZG8gVHIiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjM3MDkxNzg5LCJleHAiOjE2MzcwOTg5ODl9.DoSmS8VS_OXcX3WpzyJNWYcaguxK3vra6QZ-3US2xWU",
                    uid: "618ece7242e7099114527846",
                    name: "Fernando Tr",
                    email: "test@gmail.com"
                }
            }
        }));
        
        await store.dispatch(
            startChecking()
        );

        const actions  = store.getActions();

        // console.log(actions);

        expect(actions[0]).toEqual({
            type: types.login,
            payload: {
                uid: expect.any(String),
                name: expect.any(String),
                email: expect.any(String)
            }
        });

    });

});