import React from 'react'

import "../../App.css"
import HeaderComponent from "../HeaderComponent";
import Calendar from "../Calendar";
import Stats from "../Stats";

export default class Home extends React.Component {
    render() {
        return(
            <div className={"home"}>
                <header className={"header"}>
                    <HeaderComponent user={"Ivan"}/></header>
                <div className={"calendar"}>
                    <Calendar/>
                </div>
                <div className={"stats"}>
                    <Stats/>
                </div>
            </div>

        )
    }
}