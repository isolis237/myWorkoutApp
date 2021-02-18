import React from 'react'
import Popup from "reactjs-popup";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import * as data from "../../exercises.json"
import ControlledPopup from "../ControlledPopup"
import FixedExerciseList from "../FixedExerciseList";


export default class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutCount: 0,
            workouts: {}
            
        }
    }

    handleFinishClick(newWorkout, name) {
        let workouts = this.state.workouts;

        workouts[this.state.workoutCount] = {};
        workouts[this.state.workoutCount].workout = newWorkout;
        workouts[this.state.workoutCount].title = name + " Workout Id: " + this.state.workoutCount

        this.setState({workouts: workouts, workoutCount: this.state.workoutCount + 1})
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
                                        <ControlledPopup name={"Upper Body"}
                                                         data={data.UpperBody}
                                                         handleFinishClick={this.handleFinishClick.bind(this)}
                                        />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Lower Body"}
                                                         data={data.LowerBody}
                                                         handleFinishClick={this.handleFinishClick.bind(this)}
                                        />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Back"}
                                                         data={data.Back}
                                                         handleFinishClick={this.handleFinishClick.bind(this)}
                                        />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Custom"}
                                                         data={data}
                                                         handleFinishClick={this.handleFinishClick.bind(this)}
                                        />
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </tr>
                    </table>
                </div>

                <div style={{height:"40%", width:"100%", backgroundColor:"#564E58"}}>
                    <FixedExerciseList workouts={this.state.workouts} text={"Recent Workouts"} />
                </div>

                <div style={{height:"45%", width:"100%", backgroundColor:"#564E58"}}>
                    <FixedExerciseList workouts={this.state.workouts} text={"All Workouts"} />
                </div>
            </div>
        )
    }
}


