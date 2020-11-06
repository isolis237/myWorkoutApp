import React from 'react'
import Fragment from 'render-fragment';

export default class ReactRoster extends React.Component {

    render() {

        const renObjData = this.props.userCourses.map(function(data, idx) {
            return ([
                <div>
                    <td key={idx}>{data.title}</td>,<td key={idx}>{data.prof}</td>,
                </div>
            ]);
        });

        return(
            <Fragment>
                <table>
                    <thead>
                        <td>Title</td>
                        <td>Professor</td>
                        <td>Rating</td>
                    </thead>
                    {renObjData}
                </table>
            </Fragment>

        )
    }
}