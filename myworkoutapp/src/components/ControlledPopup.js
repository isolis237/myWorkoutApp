import React from 'react';
import Popup from 'reactjs-popup';
import Scrollbars from 'react-custom-scrollbars';
import * as data from "../exercises.json"
import ExerciseComponent from "./ExerciseComponent"

let exercise = data.UpperBody.Arms['Band-assisted Triceps Dip'];
let exercise2 = data.UpperBody.Forearms['Barbell Reverse Curl'];
let exercise3 = data.UpperBody.Forearms['Barbell Standing Reverse Preacher Curl'];


export default class ControlledPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            workoutList: []
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
                    <div className={"popup_comp"}> 
                        <div className={"popup_title"}>
                        Create {this.props.name} Workout
                        </div>
                        <div className={"popup_body"}>
                            <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                                <ExerciseComponent exercise={exercise} onWorkoutAdd={this.handleWorkoutAdd}/>
                                <ExerciseComponent exercise={exercise2} onWorkoutAdd={this.handleWorkoutAdd}/>
                                <ExerciseComponent exercise={exercise3} onWorkoutAdd={this.handleWorkoutAdd}/>
                                <ExerciseComponent exercise={exercise2} onWorkoutAdd={this.handleWorkoutAdd}/>
                            </CustomScrollbars>
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