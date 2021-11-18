import React, { useEffect } from 'react'
import { NavBar } from '../ui/NavBar'
import { Box } from '@mui/material'

// importaciones de big calendar 
// https://github.com/jquense/react-big-calendar#readme// 
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es-mx';
import {messages} from '../../helpers/calendar-messages'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { theme } from '../../styles/mui-core-theme/materialui'
import { ModalEvents } from '../ui/ModalEvents'
import { useSelector, useDispatch } from 'react-redux'
import { activeEvent, getEvents } from '../../actions/calendarActions'
import { ToastContainer } from 'react-toastify';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const {eventList, loader} = useSelector(state => state.events);
    const {uid} = useSelector(state => state.auth.account);

    const localizer = momentLocalizer(moment);
    const eventStyleGetter = (event /*, start, end, isSelected*/)=>{
        
        const style = {
            backgroundColor: event.user._id === uid ? theme.palette.secondary.light : theme.palette.secondary.dark,
            borderRadius: 'none',
            display: 'block',
            color: 'wintersmoke',
            outlineColor: '#333'
        }

        return{
            style
        }

    };

    const onSelectEvent = (eventObj) =>{
        dispatch(activeEvent(eventObj));
    }

    const onSelectSlot = ()=>{
        dispatch(activeEvent(null));
    }

    useEffect(() => {

        dispatch(getEvents());

    }, [dispatch])

    return (
        <Box component='main' className='calendar-screen'>
            
            {
                loader && 
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="warning" />
                </Stack>
            }

            <NavBar />

            <Calendar
                localizer={localizer}
                events={eventList}
                startAccessor='start'
                endAccessor='end'
                messages={messages}
                eventPropGetter={eventStyleGetter}

                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                selectable={true}
            />

            <ModalEvents/>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </Box>
    )
}
