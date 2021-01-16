import React from 'react';
import Popup from 'reactjs-popup';
import Scrollbars from 'react-custom-scrollbars';
import ExerciseComponent from "./ExerciseComponent"
import Filters from './Filters';


export default class ControlledPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            workoutList: [],
            data: []
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

    populateList() {
        let exData = [];

        switch (this.props.name){
            case "Upper Body":
                exData = []
                exData = (Object.values(this.props.data.Arms).concat(Object.values(this.props.data.Shoulders))).concat(
                    (Object.values(this.props.data.Chest).concat(Object.values(this.props.data.Forearms))))
                 break;
            case "Lower Body":
                exData = []
                exData = (Object.values(this.props.data.Calves).concat(Object.values(this.props.data.Hips))).concat(
                    (Object.values(this.props.data.Thighs).concat(Object.values(this.props.data.Waist))))
                this.setState({data: exData})
                break;
            case "Back":
                exData = []
                exData = Object.values(this.props.data)
                break;
            default: 
                exData = []
                let upper = Object.values(this.props.data.default.UpperBody.Shoulders).concat(
                    Object.values(this.props.data.default.UpperBody.Chest)).concat(
                    Object.values(this.props.data.default.UpperBody.Forearms).concat(
                    Object.values(this.props.data.default.UpperBody.Arms)));
                let lower = Object.values(this.props.data.default.LowerBody.Calves).concat(
                    Object.values(this.props.data.default.LowerBody.Hips).concat(
                    Object.values(this.props.data.default.LowerBody.Thighs).concat(
                    Object.values(this.props.data.default.LowerBody.Waist))))
                let back = Object.values(this.props.data.default.Back)
                exData = (upper.concat(lower)).concat(back)
         }
         this.setState({data: exData})
    }

    render() {
        return (
            <div>
                <button type="button" id="button" onClick={() => {
                    this.setState({open : !this.state.open}, () => {
                        this.populateList()
                    })
                }
                    }>
                    {this.props.name}
                </button>

                <Popup 
                open={this.state.open} 
                closeOnDocumentClick
                >
                    <div className={"completePopup"}>
                        <div className={"popup_title"}>
                            Create {this.props.name} Workout
                            <Filters/>
                        </div>

                        <div className={"exercise_sel"}> 
                            <div className={"popup_body"}>
                                <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>

                                         {this.state.data.map((exercise) => (
                                             <ExerciseComponent exercise={exercise} onWorkoutAdd={this.handleWorkoutAdd}/>
                                         ))}

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
                            <button 
                                id={"finish"} 
                                onClick={() => {this.setState({open : !this.state.open})}}>
                                 Finish 
                            </button>
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