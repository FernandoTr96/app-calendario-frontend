import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import configure  from 'redux-mock-store'
import thunk from 'redux-thunk'
import { PrivateRoute } from '../../router/PrivateRoute';

const testingComponent = () => <h1>Private Route</h1>;

const middlewares = [thunk];
const mockStore = configure(middlewares);
const initState = {
    events:{
        eventList: [],
        loader: false
    },
    auth:{
        account:{
            uid: 'abc12345'
        }
    }
};
let store = mockStore(initState);

describe('Pruebas en <PrivateRoute/>', () => {

    test('debe mostrarme la ruta privada si estoy autenticado', () => {
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <PrivateRoute exact path='/' isAuth={true} component={testingComponent} />
                </MemoryRouter>
            </Provider>
        );
        const exist = wrapper.find('h1').exists();
        expect(exist).toBe(true);

    });

    test('debe mandarte al login si no estas autenticado', () => {

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <PrivateRoute exact path='/' isAuth={false} component={testingComponent} />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('h1').exists()).toBe(false);
        
    });

});