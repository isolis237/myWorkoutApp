import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as data from "./dummyData.json"
import TextField from "@material-ui/core/TextField"
import Carousel from 'react-bootstrap/Carousel'
import {Button, Dropdown, DropdownButton} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import '../App.css'



function getInput(input) {
    return input;
}

var search_input;

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}


export default class Auto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credits: false,
            professor: false,
            department: false,
            course: {},
            userCourses: []
        };

    }

    render() {

        return(
            <div class="carousel">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <h3>Choose Semester</h3>
                        <div class="spacer">
                            <InputGroup>
                                <FormControl
                                    placeholder="Year"
                                    aria-label="Year"
                                    aria-describedby="basic-addon2"
                                    size="sm"
                                />
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title="Season"
                                    id="input-group-dropdown-2"
                                    size="sm"
                                >
                                    <Dropdown.Item href="#">Fall</Dropdown.Item>
                                    <Dropdown.Item href="#">Winter</Dropdown.Item>
                                    <Dropdown.Item href="#">Spring</Dropdown.Item>
                                    <Dropdown.Item href="#">Summer</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="spacer"><h3>Filter Classes</h3></div>
                        <label>
                            <div>
                                Credits
                                <input
                                    type={'checkbox'}
                                    name="credits"
                                    type="checkbox"
                                    defaultChecked={this.state.credits}
                                    onChange={() => {
                                        this.setState({credits: !this.state.credits}, () => {
                                        });
                                    }}
                                />
                            </div>

                            <div>
                                Professor
                                <input
                                    type={'checkbox'}
                                    name="professor"
                                    type="checkbox"
                                    defaultChecked={this.state.professor}
                                    onChange={() => {
                                        this.setState({professor: !this.state.professor}, () => {
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                Department
                                <input
                                    type={'checkbox'}
                                    name="department"
                                    type="checkbox"
                                    onChange={() => {
                                        this.setState({department: !this.state.department}, () => {
                                        });
                                    }}
                                />
                            </div>
                        </label>

                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Search Classes</h3>
                        <div class="spacer">

                            <Autocomplete class="class_search_bar"
                                          options={data.courses}
                                          autoComplete={true}
                                          onChange={(event, object) => {
                                              search_input = getInput(object)
                                              console.log(object)
                                          }}
                                          getOptionLabel={(option) => option.title}
                                          renderInput={(params) => <TextField {...params} variant="outlined" />}
                            />

                            Add Class to Calendar
                            <div>
                                <button
                                    className={'add_button'}
                                    value={"Add"}
                                    onClick={() => {
                                        if (search_input != null) {
                                            //console.log(this.state.course)
                                            if (containsObject(search_input, this.state.userCourses)) {
                                                alert("Course already in schedule!")
                                            } else {
                                                alert("Adding "+search_input.title+" to calendar");
                                                var course_list = this.state.userCourses
                                                course_list.push(search_input)
                                                this.setState({course: course_list})
                                            }
                                            console.log(this.state.userCourses)
                                        }
                                    }}
                                >
                                    Add
                                </button>
                            </div>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
