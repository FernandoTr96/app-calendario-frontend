import { types } from "../types/types";
import {fetchWithToken} from '../helpers/fetch'
import {toast} from 'react-toastify'
import { string2date } from "../helpers/string2date";

export const getEvents = ()=>{
    return async (dispatch)=>{

        dispatch(showLoader());

        try {

            const response = await fetchWithToken('events');
            const body = await response.json();
            

            if(response.ok){
                
                const events = string2date(body.events);
                dispatch(setEvents(events));

            }

            
        } catch (error) {

            toast.error(`Error : ${error}`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }

        dispatch(hiddeLoader());

    }
}

export const setEvents = (events) =>
(
    {
        type: types.fillEventList,
        payload: events
    }
)

export const saveEvent = (event)=>{
    return async (dispatch) => {

        dispatch(showLoader());

        try {

            const insert = await fetchWithToken(
                'events/addEvent',
                event,
                'POST'
            );

            if(insert.ok){
                toast.success(`Se ha añadido un nuevo evento al calendario`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                dispatch(getEvents());
            }
            
        } catch (error) {
            
            toast.error(error.msg, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }

        dispatch(hiddeLoader());

    }
}


export const editEvent = (event)=>{
    return async (dispatch)=>{

        const id = event.id;
        delete event.id;

        dispatch(showLoader());

        try {

            const update =  await fetchWithToken(
                `events/update/${id}`,
                event,
                'PUT'
            );

            if(update.ok){

                toast.info(`evento actualizado con exito`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });

                dispatch(getEvents());

            }

        } catch (error) {
            
            toast.error(`Error: ${error.msg}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        dispatch(hiddeLoader());

    }
}

export const deleteEvent = (id)=>{
    return async (dispatch)=>{

        dispatch(showLoader());

        try {

            const _delete = await fetchWithToken(
                `events/delete/${id}`,
                {},
                'DELETE'
            )

            if(_delete.ok){

                toast.warning(`el evento fue eliminado con exito`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });

                dispatch(getEvents());
            }

            
        } catch (error) {

            toast.error(`Error: ${error.msg}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        }

        dispatch(hiddeLoader());

    }
}

export const activeEvent = (event)=>(
    {
        type: types.activeEvent,
        payload: event
    }
)

export const showLoader = ()=>(
    {
        type: types.showLoader
    }
)
export const hiddeLoader = ()=>(
    {
        type: types.hiddeLoader
    }
)