import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'

export default class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            quote: [],
            showModal: false,
            type: 0
        }
    }

    //fetch random quote everytime main page renders
    componentDidMount() {
        let index = Math.random() * 1600;
        index = Math.floor(index)
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(quoteList => {
                this.setState({quote: quoteList[index]})
            });
    }


    render() {
        return(
            <div>
                <table style={{width:"100%"}}>
                    <tr>
                        <td><span>
                            {"Welcome, " + this.props.user}
                            </span>
                        </td>
                        <td style={{align:"right"}}>
                            <span>
                            {this.state.date.toLocaleTimeString()}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <span>
                        <i>{this.state.quote.text}</i>
                        </span>
                    </tr>
                    <tr>
                        <td>
                            <span>
                        - <b>{this.state.quote.author}</b>
                        </span>
                        </td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                    Add Log
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({showModal: !this.state.showModal, type: 0})}}>
                                        Run
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({showModal: !this.state.showModal, type: 1})}}>
                                        Water
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({showModal: !this.state.showModal, type: 2})}}>
                                        Workout
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({showModal: !this.state.showModal, type: 3})}}>
                                        Custom
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </table>
                    <LogPopup
                        show={this.state.showModal}
                        type={this.state.type}
                        onHide={() => this.setState({showModal: !this.state.showModal})}
                    />
            </div>

        )
    }
}


function LogPopup(props) {

    switch (props.type) {
        case 0:
            return(
                <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Run Log
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="mran">Miles Ran</label>

                    <input type="number" id="mran" name="mran"
                        min="0" ></input>

                    <label for="tran">Time Ran</label>

                    <input type="number" id="tran" name="tran"
                        min="0"></input>

                    <button type="submit" onClick={
                        () => {
                            let mran = document.getElementById("mran").value;
                            let tran = document.getElementById("tran").value;
                        }
                    }>Submit</button>

                        {/** Create component to create log with these values as props*/}
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
            )
            break;
        case 1:
            return(
                <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Water Log
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="wdrank">Water Drank</label>

                    <input type="number" id="wdrank" name="wdrank"
                        min="0"></input>

                    <button type="submit" onClick={
                        () => {
                            let wdrank = document.getElementById("wdrank").value;
                        }
                    }>Submit</button>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
            )
            break;
        case 2:
            return(
                <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Workout Log
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Workout Completed:
                    Will render your workouts here to choose from in the future
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
            )
            break;
        default:
            return(
                <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Custom Log
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Enter title: 
                    <input></input>
                    <Dropdown>
                            <Dropdown.Toggle variant="primary">
                                Add Field
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    Text Field
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Number Field
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Workout Item
                                </Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
            )
            break;
    }

  }