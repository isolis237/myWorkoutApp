import React from 'react'
import ReactCalendar from './ReactCalendar'
import AddClasses from './AddClasses'
import ReactRoster from "./FixedRoster"

import "../App.css"

export default class FunctionalCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            userCourses: [],
            name: "test"
        }
    }

    handleClick(courselist) {
        this.setState({userCourses : courselist})
    }

    render() {
        return(

            <body>
                <div className={'left_container'}>
                    <AddClasses
                        addClick={{userCourses: this.state.userCourses, handleClick:this.handleClick.bind(this)}}
                    />
                    <ReactRoster userCourses={this.state.userCourses}/>
                </div>
                <div className={'right_container'}>
                    <ReactCalendar events={this.state.userCourses}/>
                </div>
            </body>
        )
    }
}