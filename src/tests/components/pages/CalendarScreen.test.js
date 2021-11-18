import {mount} from 'enzyme'
import thunk from 'redux-thunk'
import configure from 'redux-mock-store'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import { CalendarScreen } from '../../../components/pages/CalendarScreen';
import {activeEvent, getEvents} from '../../../actions/calendarActions'

const middlewares = [thunk];
const mockstore = configure(middlewares);
const initialState = {
    events:{
        eventList: [],
        loader: false,
        activeNow: null
    },
    auth:{
        account:{
            uid: 'abc12346'
        }
    },
    ui:{
        modalEventsOpen: false
    }
};
let store = mockstore(initialState);
store.dispatch = jest.fn();

let wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <CalendarScreen/>
        </MemoryRouter>
    </Provider>
);

jest.mock('../../../actions/calendarActions',()=>({
    activeEvent: jest.fn(),
    getEvents: jest.fn()
}))

describe('Pruebas en <CalendarScreen/>', () => {

    beforeEach(()=>{
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <CalendarScreen/>
                </MemoryRouter>
            </Provider>
        );
    })
    
    test('debe renderizarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe disparar la accion activeEvent al seleccionar el evento del calendario o el slot', () => {
        
        const calendar = wrapper.find('Calendar');
        const event = calendar.prop('onSelectEvent');
        const slot = calendar.prop('onSelectSlot');

        event();
        slot();

        expect(activeEvent).toHaveBeenCalled();
        expect(getEvents).toHaveBeenCalled();

    });

});