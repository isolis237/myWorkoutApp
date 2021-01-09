import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends React.Component {
    render() {
        return(
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView={"dayGridWeek"}
                headerToolbar={false}
                height={"100%"}
                eventContent={
                    <button style={{width:"100%"}}>Worked Out</button>
                    }
                events={[{
                    id: 'a',
                    title: 'my event',
                    start: '2021-01-04'
                }]}

                //user Customization
                weekends={false}
            />
        )
    }
}

