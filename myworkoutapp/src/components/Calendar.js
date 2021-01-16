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
                eventContent={renderEventContent}
                events={[{
                    id: 'a',
                    title: 'my event',
                    start: '2021-01-14'
                },
                {
                    id: 'b',
                    title: 'my event',
                    start: '2021-01-14'
                },
                {
                    id: 'd',
                    title: 'my event',
                    start: '2021-01-13'
                }]}

                //user Customization
                weekends={false}
            />
        )
    }
}

function renderEventContent(eventInfo) {
    //set event id to determine what gets returned
    switch (eventInfo.event.id) {
        case 'a':
            return(
                <div className={"calWorkout"}>
                    Workout
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
        case 'b':
            return(
                <div className={"calWater"}>
                    Water
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
        case 'c':
            return(
                <div className={"calRun"}>
                    Run
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
        default:
            return(
                <div className={"calCustom"}>
                    Custom
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
    }
  }