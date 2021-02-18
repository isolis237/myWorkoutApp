import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import React from 'react'
import { ThemeConsumer } from 'styled-components';
import "./goals.css"

export default class MyGoals extends React.Component {
    constructor() {
        super();
        this.state = {
            period: "Weekly",
            time: 0,
            miles: 0,
            water: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOnChange() {
        let newTime = document.getElementById("time_period").value;
        let newMiles = document.getElementById("miles").value;
        let cups = document.getElementById("cups").value;

        newTime = newTime > 0 ? newTime: (this.state.time > 0 ? this.state.time : 0);
        newMiles = newMiles > 0 ? newMiles: (this.state.miles > 0 ? this.state.miles : 0);
        cups = cups > 0 ? cups: (this.state.water > 0 ? this.state.water : 0);

        this.setState({time: newTime, miles: newMiles, water: cups})
        
       // this.props.updateGoals(this.state);
    }

    handleClick(transition) {
        //2 conversions 
        //weekly -> monthly 1 
        //monthly -> yearly 2 
        // weekly -> yearly 3 
        //monthly -> weekly 4
        // yearly -> monthly 5
        // yearly -> weekly 6

        let newTime = this.state.time;
        let newMiles = this.state.miles;
        let newCups = this.state.water;

        document.getElementById("time_period").value = "";
        document.getElementById("miles").value = "";
        document.getElementById("cups").value = "";

        switch (transition) {
            case 1:
                newTime *= 4;
                newMiles *= 4;
                break;
            case 2:
                newTime *= 12;
                newMiles *= 12;
                break;
            case 3:
                newTime *= 52;
                newMiles *= 52;
                break;
            case 4:
                newTime /= 4;
                newMiles /= 4;
                break;
            case 5:
                newTime /= 12;
                newMiles /= 12;
                break;
            case 6:
                newTime /= 52;
                newMiles /= 52;
                break;
        }

        this.setState({time: Math.ceil(newTime), miles: Math.ceil(newMiles)})
        
    }

    render() {
        return(
            <div className={"myGoals"}>
                <div className={"goal_form"}>
                        Current Goals : {this.state.period}
                        <table >
                            <thead>
                                <tr >
                                    <th>Time: {this.state.time} ({Math.round(this.state.time / 60)} h) </th>
                                    <th>Miles: {this.state.miles}</th>
                                    <th>Water: {this.state.water}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 
                                        <label>
                                            New Goal:
                                            <input type="number" id={"time_period"} max={45000}
                                            placeholder={"Minutes "} onChange={this.handleOnChange}/>
                                            {this.state.period}
                                        </label>
                                    </td>
                                    <td>
                                    <label>
                                            New Goal:
                                            <input type="number" id={"miles"}  max={2000}
                                            placeholder={"Miles "} onChange={this.handleOnChange}/>
                                            {this.state.period}
                                        </label>
                                    </td>
                                    <td>
                                    <label>
                                            New Goal:
                                            <input type="number" id={"cups"} max={20}
                                            placeholder={"Cups "} onChange={this.handleOnChange}/>
                                            Daily
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                                {this.state.period}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {
                                    if (this.state.period === "Monthly") {
                                        this.handleClick(4)
                                    } else if (this.state.period === "Yearly") {
                                        this.handleClick(6)
                                    }
                                    this.setState({period: "Weekly"});
                                    }}>
                                    Weekly
                                </Dropdown.Item >
                                <Dropdown.Item onClick={() => {
                                    if (this.state.period === "Weekly") {
                                        this.handleClick(1)
                                    } else if (this.state.period === "Yearly") {
                                        this.handleClick(5)
                                    }
                                    this.setState({period: "Monthly"});
                                    }}>
                                    Monthly
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    if (this.state.period === "Weekly") {
                                        this.handleClick(3)
                                    } else if (this.state.period === "Monthly") {
                                        this.handleClick(2)
                                    }
                                    this.setState({period: "Yearly"});
                                    }}>
                                    Yearly
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
                <div className={"desc"}>
                    <p>
                        Enter your goals above and see what they translate to in different
                        time intervals. Your goal progress is displayed in the home page.
                    </p>
                </div>
            </div>
        )
    }
}