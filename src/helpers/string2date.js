import moment from 'moment'

export const string2date = (events = [])=>{

    return events.map((event)=>({
        ...event,
        start: moment(event.start).toDate(),
        end: moment(event.start).toDate()
    }))

}