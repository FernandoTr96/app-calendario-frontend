import {mount} from 'enzyme'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configure from 'redux-mock-store'
import thunk from 'redux-thunk'
import { AppRouter } from '../../router/AppRouter';

const middlewares = [thunk];
const mockStore = configure(middlewares);
let initState = {
    auth:{
        account:{
            uid: 'abcd123456'
        },
        checking: true
    },
    events: {
        eventList:[],
        loader: false,
        activeNow: {
            id: 'abc12345',
            title: 'prueba',
            desc: 'prueba',
            start: new Date().getTime(),
            end: new Date().getTime() + 100000,
        }
    },
    ui:{
        modalEventsOpen: false
    }
};
let store = mockStore(initState);


describe('Pruebas en <AppRouter/>', () => {
    
    test('debe mostrar el loader si checking esta en true', () => {

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        );

        const exist = wrapper.find('h5').exists();
        expect(exist).toBe(true);
        
    });

    test('debe mostrar la pagina de inicio si estoy autenticado y checking esta en false', () => {
        
        initState.auth.checking = false;
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        );
        
        expect(wrapper.find('.calendar-screen').exists()).toBe(true);

    });

    test('debe mostrar el login si no estoy autenticado y checking esta en false ', () => {
        
        delete initState.auth.account.uid;
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.tabLogin').exists()).toBe(true);

    });

});