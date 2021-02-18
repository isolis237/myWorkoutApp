import React from 'react'
import Popup from "reactjs-popup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class PublicWorkouts extends React.Component {
    render() {
        return(
            <div className={"publicWorkouts"}>
                <div className={"header"}>
                    <table>
                        <tr>Public Workouts</tr>
                    </table>
                </div>
                <div style={{height:"35%", width:"100%", backgroundColor:"#85C19A"}}>
                    Trending Workouts
                </div>
                <div style={{height:"50%", width:"100%", backgroundColor:"white"}}>
                    All Workouts
                </div>
            </div>
        )
    }
}