import React from 'react'
import Popup from "reactjs-popup";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "react-bootstrap"
import * as data from "../../exercises.json"

export default class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ""
        }
    }

    handleClick(setType) {
        this.setState({type: setType})
    }


    render() {
        return(
            <div>
                <div className={"header"}>
                    My Workouts
                    <Popup
                        trigger={<button> Create Workout </button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className={"workoutspopup"}>
                                <button onClick={close}>
                                    &times;
                                </button>
                                <div> Create New Workout </div>
                                <div>
                                    <Popup
                                        trigger={<DropdownButton title={"Create Workout"}></DropdownButton>}
                                        nested
                                    >
                            <span>
                                <Dropdown.Item as="button"
                                               onClick={(e) => {this.handleClick(e.target.innerHTML)}}>Upper Body</Dropdown.Item>
                                <Dropdown.Item as="button"
                                               onClick={(e) => {this.handleClick(e.target.innerHTML)}}>Lower Body</Dropdown.Item>
                                <Dropdown.Item as="button"
                                               onClick={(e) => {this.handleClick(e.target.innerHTML)}}>Back</Dropdown.Item>
                                <Dropdown.Item as="button"
                                               onClick={(e) => {this.handleClick(e.target.innerHTML)}}>Custom</Dropdown.Item>
                            </span>
                                    </Popup>
                                    <button
                                        onClick={() => {
                                            close();
                                        }}
                                    >
                                        close
                                    </button>
                                </div>
                                <div style={{backgroundColor:"#904E55", height:"75%"}}>
                                    <table>
                                        {/**this.renderExerciseList()*/}
                                    </table>
                                </div>
                            </div>
                        )}
                    </Popup>
                    <button style={{float: "right"}}>
                        Delete Workout
                    </button>
                </div>
            </div>
        )
    }
/**
    renderExerciseList() {
        data.UpperBody.map((exercise) => {
            return(
                    <tr>{exercise.title}</tr>
                )
        })
    }
*/
}
