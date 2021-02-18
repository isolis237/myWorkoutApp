import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import "./pages/Home/Home.css"

export default class Stats extends React.Component {
    render() {
        return(
            <div className={"stats"}>
                
                {/**
                <div className={"timeSel"}>
                    <button>Week</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>
                 */}
                

                <div className={"statsTitle"}>
                    User Stats
                </div>

                <div className={"first"}>
                    <Progress
                        type="circle"
                        strokeWidth={3}
                        percent={this.props.stats.mran / this.props.goals.mran * 100}
                        width={160}
                    />
                     
                </div>

                    <span style={{gridRow:"3",gridColumn:"3"}}>Water Drank</span>

                <div className={"second"}>
                    <Progress
                        type="circle"
                        strokeWidth={3}
                        percent={this.props.stats.tran / this.props.goals.tran * 100} 
                        width={160}
                    />
                </div>

                    <span style={{gridRow:"3",gridColumn:"2"}}>Time Exercising</span>

                <div className={"third"}>
                    <Progress
                        type="circle"
                        strokeWidth={3}
                        percent={this.props.stats.wdrank / this.props.goals.wdrank * 100}
                        width={160}
                    />
                </div>

                <span style={{gridRow:"3",gridColumn:"1"}}>Miles Ran</span>

            </div>
        )
    }
}
