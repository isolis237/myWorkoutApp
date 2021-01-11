import React from 'react'
import Popup from "reactjs-popup";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "react-bootstrap"
import ExerciseList from "../ExerciseList";
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
            <div className={"myWorkouts"}>
                <div className={"header"}>
                    <table>
                        <tr>My Workouts</tr>
                        <tr>
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
                            <button>
                                Delete Workout
                            </button>
                        </tr>
                    </table>
                </div>
                <div style={{height:"35%", width:"100%", backgroundColor:"white"}}>
                    <ExerciseList/>
                </div>
                <div style={{height:"50%", width:"100%", backgroundColor:"green"}}>
                    <ExerciseList/>
                </div>
            </div>
        )
    }
}

function ExerciseComp(props) {
    return(
        <div className={"exercise_component"}>
            Test Exercise Item {props.value}
        </div>
    )
}

