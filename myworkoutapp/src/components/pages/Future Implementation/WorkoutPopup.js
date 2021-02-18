import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default class WorkoutPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            open : false
        }
    }
    render() {
        return(
            <div>
                <button type="button" className="button" onClick={() => this.setState({open: !this.state.open})}>
                    Button
                </button>
                <Popup open={this.state.open} closeOnDocumentClick onClose={this.setState({open: false})}>
                    <div className="modal">
                        <a className="close" onClick={this.setState({open: false})}>
                            &times;
                        </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                        omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                        ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                        doloribus. Odit, aut.
                    </div>
                </Popup>
            </div>
        )
    }
}

