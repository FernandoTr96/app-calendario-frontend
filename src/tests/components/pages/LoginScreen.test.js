import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import configure  from 'redux-mock-store'
import thunk from 'redux-thunk'
import { act } from 'react-dom/test-utils';
import { LoginScreen } from '../../../components/pages/LoginScreen';
import {startLoginWithEmailAndPassword} from '../../../actions/authActions';

jest.mock('../../../actions/authActions', ()=>({
    startLoginWithEmailAndPassword: jest.fn(),
    registerAccount: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configure(middlewares);
const initState = {};
let store = mockStore(initState);
store.dispatch = jest.fn();

let wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <LoginScreen/>', () => {
    
    beforeEach(()=>{
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginScreen/>
                </MemoryRouter>
            </Provider>
        );
    })

    test('debe renderizarse correctamente', () => {
    
        expect(wrapper).toMatchSnapshot();

    });

    test('debe llamar el dispatch del login ', async () => {

        const login = wrapper.find('form').at(0);
        
        await act( async ()=>{

            login.find('input[name="email"]').simulate('change', {
                target:{
                    name: 'email',
                    value: 'test@gmail.com'
                }
            })

            login.find('input[name="password"]').simulate('change', {
                target:{
                    name: 'password',
                    value: '123'
                }
            })

            login.simulate('submit', {
                preventDefault(){}
            })

        })

        expect(startLoginWithEmailAndPassword).toHaveBeenCalled();

    });

    test('debe mostrar mensaje de error cuando las contraseñas no son iguales en el registro', async () => {

        const register = wrapper.find('form').at(1);
        
        await act( async ()=>{

            register.find('input[name="name"]').simulate('change', {
                target:{
                    name: 'name',
                    value: 'fernando'
                }
            })

            register.find('input[name="email"]').simulate('change', {
                target:{
                    name: 'email',
                    value: 'test@gmail.com'
                }
            })

            register.find('input[name="password"]').simulate('change', {
                target:{
                    name: 'password',
                    value: '54321haloO'
                }
            })

            register.find('input[name="confirm_password"]').simulate('change', {
                target:{
                    name: 'confirm_password',
                    value: '54321haloOO'
                }
            })

            register.simulate('submit', {
                preventDefault(){}
            })

        })

        expect(register.find('.MuiFormControl-root').at(7).text().includes('Las contraseñas no coinciden')).toBe(true)

    });

});