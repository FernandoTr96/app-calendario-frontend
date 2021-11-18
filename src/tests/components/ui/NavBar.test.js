import configure from 'redux-mock-store'
import thunk from 'redux-thunk'
import {mount} from 'enzyme'
import { NavBar } from '../../../components/ui/NavBar';
import { Provider } from 'react-redux';
import {deleteEvent, activeEvent} from '../../../actions/calendarActions'

jest.mock('../../../actions/calendarActions', ()=>({
    deleteEvent: jest.fn(),
    activeEvent: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configure(middlewares);
const initState = {
    events: {
        activeNow: {
            id: '9376382223',
            title: 'prueba',
            desc: 'prueba',
            start: new Date().getTime(),
            end: new Date().getTime() + 1000
        }
    },
    auth:{
        account: {
            name: 'Fernando'
        }
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();

let wrapper = mount(
    <Provider store={store}>
        <NavBar/>
    </Provider>
)

describe('Pruebas en <NavBar/>', () => {

    beforeEach(()=>{
        wrapper = mount(
            <Provider store={store}>
                <NavBar/>
            </Provider>
        )
    })
    
    test('debe renderizarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('DeleteForeverIcon debe eliminar el evento', () => {

        wrapper.find('span').at(1).prop('onClick')();
        expect(deleteEvent).toHaveBeenCalledWith(initState.events.activeNow.id);

    });

});