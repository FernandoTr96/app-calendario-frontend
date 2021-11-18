import {mount} from 'enzyme'
import thunk from 'redux-thunk'
import configure from 'redux-mock-store'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import {act} from 'react-dom/test-utils'
import moment from 'moment'
import { ModalEvents } from '../../../components/ui/ModalEvents'
import { editEvent, saveEvent, activeEvent } from '../../../actions/calendarActions'

jest.mock('../../../actions/calendarActions', ()=>({
    saveEvent: jest.fn(),
    editEvent: jest.fn(),
    activeEvent: jest.fn()
}))

const middlewares = [thunk];
const mockstore = configure(middlewares);
let initialState = {
    events:{
        activeNow: null
    },
    ui:{
        modalEventsOpen: true
    }
};
let store = mockstore(initialState);
store.dispatch = jest.fn();

let wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <ModalEvents/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <ModalEvents />', () => {
    
    beforeEach(()=>{
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalEvents/>
                </MemoryRouter>
            </Provider>
        );
        jest.clearAllMocks();
    })

    test('debe abrir el modal', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('debe guardar un evento si activeNow es null', async () => {

        const form = wrapper.find('form');
        
        await act( async ()=>{

            form.find('input[name="startDate"]').simulate('change', {
                target:{
                    name: 'startDate',
                    value: new Date().getTime()
                }
            })

            form.find('input[name="endDate"]').simulate('change', {
                target:{
                    name: 'endDate',
                    value: new Date().getTime() + 1000000
                }
            })

            form.find('input[name="title"]').simulate('change', {
                target:{
                    name: 'title',
                    value: 'prueba'
                }
            })

            form.find('textarea[name="desc"]').simulate('change', {
                target:{
                    name: 'desc',
                    value: 'prueba'
                }
            })

            form.simulate('submit',{
                preventDefault(){}
            })

        })

        expect(saveEvent).toHaveBeenCalled();

    });

    test('debe acttualizar un evento si activeNow no es null', async () => {

        initialState = {
            events:{
                activeNow: {
                    id: 'abc123'
                }
            },
            ui:{
                modalEventsOpen: true
            }
        };

        store = mockstore(initialState);
        store.dispatch = jest.fn();

        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ModalEvents/>
                </MemoryRouter>
            </Provider>
        );

        const newEvent = {
            title: 'prueba',
            desc: 'prueba',
            start: moment(1637209814622),
            end: moment(1737209814622)
        }

        const form = wrapper.find('form');
        
        await act( async ()=>{

            form.find('input[name="startDate"]').simulate('change', {
                target:{
                    name: 'startDate',
                    value: moment(1637209814622)
                }
            })

            form.find('input[name="endDate"]').simulate('change', {
                target:{
                    name: 'endDate',
                    value: moment(1737209814622)
                }
            })

            form.find('input[name="title"]').simulate('change', {
                target:{
                    name: 'title',
                    value: 'prueba'
                }
            })

            form.find('textarea[name="desc"]').simulate('change', {
                target:{
                    name: 'desc',
                    value: 'prueba'
                }
            })

            form.simulate('submit',{
                preventDefault(){}
            })

        })
        
        expect(editEvent).toHaveBeenCalledWith({
            ...newEvent,
            id: store.getState().events.activeNow.id
        });
        expect(activeEvent).toHaveBeenCalledWith(null);

    });

});