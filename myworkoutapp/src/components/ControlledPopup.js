import React from 'react';
import Popup from 'reactjs-popup';
import Scrollbars from 'react-custom-scrollbars';
import ExerciseComponent from "./ExerciseComponent"
import * as data from "../exercises.json"

let exercise = data.Back['Band-assisted Parallel Grip Pull-up'];

export default class ControlledPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            workoutList: []
        }
        this.handleWorkoutAdd = this.handleWorkoutAdd.bind(this)
    }

    handleWorkoutAdd(exercise) {
        if (this.state.workoutList.includes(exercise)) {
            alert("Already have exercise in workout!")
        } else {
            this.setState({workoutList: this.state.workoutList.concat(exercise)}, () => {console.log(this.state.workoutList)})
        }
    }

    render() {
        return (
            <div>
                <button type="button" id="button" onClick={() => this.setState({open : !this.state.open})}>
                    {this.props.name}
                </button>

                <Popup 
                open={this.state.open} 
                closeOnDocumentClick
                >
                    <div className={"completePopup"}>
                    <div className={"popup_title"}>
                            Create {this.props.name} Workout
                            </div>

                        <div className={"exercise_sel"}> 
                            <div className={"popup_body"}>
                                <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                                     <ExerciseComponent exercise={exercise} onWorkoutAdd={this.handleWorkoutAdd}/>
                                </CustomScrollbars>
                            </div>
                        </div>

                        <div className={"workoutList"}>
                            <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                                {this.state.workoutList.map((exercise, index) => (
                                    <div className={"workoutItem"} key={index}>
                                          {exercise}
                                          <button className={"ex_button"}> Delete </button>
                                    </div>
                                ))}
                            </CustomScrollbars>
                            <button id={"finish"}> Finish </button>
                        </div>
                    </div>
                </Popup>

            </div>
        );
    }

};

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  
  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );