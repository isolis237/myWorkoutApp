import React from 'react'
import Popup from "reactjs-popup";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "react-bootstrap"
import ExerciseList from "../ExerciseList";
import 'bootstrap/dist/css/bootstrap.css';
import * as data from "../../exercises.json"
import ControlledPopup from "../ControlledPopup"


export default class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    render() {
        const CustomButton = React.forwardRef(({ open, ...props }, ref) => (
            <button className="button" ref={ref} {...props}>
              Trigger - {props.open ? 'Opened' : 'Closed'}
            </button>
          ));

        return(
            <div className={"myWorkouts"}>
                <div className={"header"}>
                    <table>
                        <tr><span>My Workouts</span></tr>
                        <tr>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                    Create Workout
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Upper Body"} data={data.UpperBody}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Lower Body"} data={data.LowerBody}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Back"} data={data.Back}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Custom"} data={data}/>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </tr>
                    </table>
                </div>

                <div style={{height:"40%", width:"100%", backgroundColor:"#2e3236"}}>
                    <ExerciseList text={"Recent Workouts"}/>
                </div>

                <div style={{height:"45%", width:"100%", backgroundColor:"#2e3236"}}>
                    <ExerciseList text={"All Workouts"}/>
                </div>
            </div>
        )
    }
}


