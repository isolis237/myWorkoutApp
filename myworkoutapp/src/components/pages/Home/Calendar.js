import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import "./Home.css"

export default class Calendar extends React.Component {
    render() {
        return(
            <div className={"calendar"}>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView={"dayGridWeek"}
                    headerToolbar={false}
                    height={"100%"}
                    eventContent={renderEventContent}
                    events={this.props.events}
                    navLinks={false}

                    //user Customization
                    weekends={true}
                />
            </div>
            
        )
    }
}


function renderEventContent(eventInfo) {
    switch (eventInfo.event.id) {
        case "calWorkout":
            return(
                <div className={"calItem"}>
                    Workout
                    {eventInfo}
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
        case "calWater":
            return(
                <div className={"calItem"} style={{backgroundColor:"lightblue"}}>
                    <div className={"waterImg"}></div>
                    <div className={"calLog"}>{eventInfo.event.extendedProps.wdrank + " Cups"}</div>
                    <button className={"delete"}/>
                </div>
            )
        break;
        case "calRun":
            return(
                <div className={"calItem"}>
                    <div className={"runImg"}></div>
                    <div className={"calLog"}>
                        {eventInfo.event.extendedProps.mran}  Miles
                        <div>{eventInfo.event.extendedProps.tran} minutes </div>
                    </div>
                    <button className={"delete"}/>
                </div>
            )
        break;
        default:
            return(
                <div className={"calItem"}>
                    Custom
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                </div>
            )
        break;
    }
  }
