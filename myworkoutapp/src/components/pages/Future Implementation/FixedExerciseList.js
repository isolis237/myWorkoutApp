import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import WorkoutPopup from "./WorkoutPopup";
import Popup from "reactjs-popup";

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default class FixedExerciseList extends React.Component {
    constructor() {
        super();
        this.state = {
            menuItems: [],
            showPopup: false
        }
        this.onSelect = this.onSelect.bind(this)
    }

    renderMenuItem(item) {
        return<h5>{item.title}</h5>
    }

    renderWorkout(item) {
        return item.map((exercise, index) => (
            <div className={"exItem"}>
                {index + ": " +  exercise}
            </div>
        ))
    }

    createMenu(list) {
        return list.map((item) => (
            <Popup trigger={open => (
                <button className="menu-item" key={item}>
                    {this.renderMenuItem(item)}
                </button>
            )}
                   position={"center center"}
                   modal={true}
                   closeOnDocumentClick
            >
                <div className={"workoutPopup"} key={item}>
                    {this.renderWorkout(item)}
                </div>
            </Popup>
            /**
             <div className={"menu-item"} key={item}>
                 {this.renderMenuItem(item)}
             </div>
             */
        ))
    }

    onSelect(item) {
        console.log("key: " + item)
        this.setState({showPopup: !this.state.showPopup})
    }

    render() {
        const myMenu = this.createMenu(this.state.menuItems)
        return(
            <div>
                {this.props.text}

                <button onClick={() => {
                    let menu = this.state.menuItems;

                    for (var i = 0; i < ObjectLength(this.props.workouts); i++) {
                        menu[i] = this.props.workouts[i].workout;
                        menu[i].title = this.props.workouts[i].title
                    }
                    this.setState({menuItems: menu})
                }}>Click</button>

                <ScrollMenu
                    data={myMenu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    onSelect={this.onSelect}
                />


            </div>
        )
    }
}
