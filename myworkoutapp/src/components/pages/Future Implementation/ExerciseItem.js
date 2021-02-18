import React from 'react'

export default class ExerciseItem extends React.Component {
    render() {
        return(
            <div className={"exItem"}>
                {this.props.exercise}
            </div>
        )
    }
}