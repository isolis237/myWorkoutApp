import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import "./pages/Home/Home.css"

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

            this.intervalID = setInterval(
                () => this.tick(),
                1000
              );
    }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

    handleCreateEvent(data, logType) {
        this.props.handleCreateEvent(data, logType)
    }

    render() {
        return(

            <div className={"headerComp"}>
                <table className={"headertable"}>
                    <tr>
                        Welcome, User 
                        {/** 
                          Future Implementation
                         *  this.props.user */}
                    </tr>
                    <tr>
                        <i>{this.state.quote.text}</i>
                    </tr>
                    <tr>
                        - <b>{this.state.quote.author ? this.state.quote.author: "Anonymous"}</b>
                    </tr>
                </table>

                <div className={"headerExtras"}>

                {this.state.date.toLocaleTimeString()}
                
                <Dropdown>
                    <Dropdown.Toggle variant="primary" style={{backgroundColor:"grey", borderColor:"white"}}>
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


                </div>

                <LogPopup
                        show={this.state.showModal}
                        date={this.state.date}
                        type={this.state.type}
                        onHide={() => this.setState({showModal: !this.state.showModal})}
                        createEvent={this.handleCreateEvent.bind(this)}
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

                    <label for={"ldate"}>Log Date </label>
                    <input type={"date"} id={"ldate"} name={"ldate"} min={"2021:01:01"}
                           max={props.date.toISOString().split("T")[0]}
                           defaultValue={props.date.toISOString().split("T")[0]}
                    />

                    <button type="submit" onClick={
                        () => {
                            let data = {
                                start : document.getElementById("ldate").value,
                                mran : document.getElementById("mran").value,
                                tran : document.getElementById("tran").value,
                                id: "calRun"
                            }
                            props.createEvent(data);
                            props.onHide();
                        }
                    }>Submit</button>

                        {/** Create component to create log with these values as props*/}
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Cancel</button>
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

                    <label htmlFor={"ldate"}>Log Date </label>
                    <input type={"date"} id={"ldate"} name={"ldate"} min={"2021:01:01"}
                           max={props.date.toISOString().split("T")[0]}
                           defaultValue={props.date.toISOString().split("T")[0]}
                    />

                    <button type="submit" onClick={
                        () => {
                            let data = {
                                start : document.getElementById("ldate").value,
                                wdrank : document.getElementById("wdrank").value,
                                id: "calWater"
                            }
                            props.createEvent(data);
                            props.onHide();
                        }
                    }>Submit</button>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={props.onHide}>Cancel</button>
                </Modal.Footer>
            </Modal>
            )
            break;
            {/**
            
                To be implemented in the future

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
                <button onClick={props.onHide}>Cancel</button>
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
                <button onClick={props.onHide}>Cancel</button>
                </Modal.Footer>
            </Modal>
            )
            break;
            */}
        
    }

  }