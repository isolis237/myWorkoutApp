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
            type: ""
        }
    }

    handleClick(setType) {
        this.setState({type: setType})
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
                        <tr>My Workouts</tr>
                        <tr>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                    Create Workout
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Upper Body"}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Lower Body"}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Back"}/>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ControlledPopup name={"Custom"}/>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

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


