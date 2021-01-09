import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Stats extends React.Component {
    render() {
        return(
            <div className={"stats"}>
                <table>
                    <tr>
                        <th style={{textAlign:"center"}}>
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
                    <tr>
                        <td>
                            <CircularProgressbar
                                 value={10}
                                 text={"Water Drank"}
                            />
                        </td>
                        <td>
                            <CircularProgressbar
                                value={15}
                                text={"Miles Ran"}
                            />
                        </td>
                        <td>
                            <CircularProgressbar
                                value={80}
                                text={"Calories Ate"}
                            />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
