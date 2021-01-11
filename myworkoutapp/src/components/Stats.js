import React from 'react'
import ProgressProvider from './ProgressProvider'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Stats extends React.Component {
    render() {
        return(
            <table style={{height:"100%", width:"100%"}}>
                <tr style={{height:"15%"}}>
                    <th colSpan={3} style={{textAlign:"center"}}>
                        User Stats
                        <button className={"time_select"}>
                            Week
                        </button>
                        <button className={"time_select"}>
                            Month
                        </button>
                        <button className={"time_select"}>
                            Year
                        </button>
                    </th>
                </tr>
                <tr style={{height:"85%"}}>
                    <td style={{width:"30%", padding: "1%"}}>
                        <div style={{width:"60%", margin:"0 auto"}}>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    pathColor: "#f00",
                                    trailColor: "#eee",
                                    strokeLinecap: "butt"
                                })}
                            >
                                <CircularProgressbar
                                    value={70}
                                    text={"Time Exercising"}
                                    styles={buildStyles({
                                        pathColor: "turquoise",
                                        trailColor: "gold",
                                        strokeLinecap: "butt",
                                        textSize: "10px",
                                        textColor: "white"
                                    })}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </td>
                    <td style={{width:"30%", padding:"1%"}}>
                        <div style={{width:"60%", margin:"0 auto"}}>
                            <ProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                                {percentage => (
                                    <CircularProgressbar
                                        value={30}
                                        text={"Water Drank"}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: "turquoise",
                                            trailColor: "gold",
                                            textSize: "10px"
                                        })}
                                    />
                                )}
                            </ProgressProvider>
                        </div>
                    </td>
                    <td style={{width:"30%", padding:"1%"}}>
                        <div style={{width:"60%", margin:"0 auto"}}>
                            <CircularProgressbar
                                value={70}
                                text={"Miles Ran"}
                                styles={buildStyles({
                                    textColor: "white",
                                    pathColor: "turquoise",
                                    trailColor: "gold",
                                    textSize: "10px"
                                })}
                            />
                        </div>
                    </td>
                </tr>
            </table>
        )
    }
}
