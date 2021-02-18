import React from 'react'

import "./Home.css"
import HeaderComponent from "../../HeaderComponent";
import Calendar from "./Calendar";
import Stats from "../../Stats";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            calEvents: [],
            stats: {
                mran: 0,
                tran: 0,
                wdrank: 0
            },
            goals: {
                mran: 100,
                tran: 1000,
                wdrank: 8,
            }
        }
    }

    handleCreateEvent(data) {
        this.setState({calEvents: this.state.calEvents.concat(data)})
            let dict = {
                mran: parseInt(this.state.stats.mran) + parseInt(data.mran >= 0 ? data.mran : 0),
                tran : parseInt(this.state.stats.tran) +  parseInt(data.tran >= 0 ? data.tran : 0),
                wdrank : parseInt(this.state.stats.wdrank) + parseInt(data.wdrank >= 0 ? data.wdrank : 0)
            }
            this.setState({stats: dict}, () => {console.log(this.state.stats)})

    }

    render() {
        return(
            <div className={"home"}>
                <HeaderComponent user={"Ivan"} handleCreateEvent={this.handleCreateEvent.bind(this)}/>
                <Calendar events={this.state.calEvents}/>
                <Stats stats={this.state.stats} goals={this.state.goals}/>
            </div>
        )
    }
}

