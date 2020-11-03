import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React from 'react';
import userCourses from './ClassSearchBar'
import ClassSearchBar from "./ClassSearchBar";

export default class ReactCalendar extends React.Component {

    state = {
        eventSources: [],
    }

    render() {
        return(
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView={'timeGridWeek'}
                stickyHeaderDates={true}
                stickyFooterScrollbar={true}
                height={'auto'}
                contentHeight={925}
                editable={true}
                slotMinTime={'8:00:00'}
                slotMaxTime={"22:00:00"}
                hiddenDays={[0,6]}
                headerToolbar={false}
                allDaySlot={false}
                expandRows={true}
                handleWindowResize={true}
                eventDurationEditable={false}
                eventDragMinDistance={0}


                eventSources={this.state.eventSources}
            />
        )
    }
}