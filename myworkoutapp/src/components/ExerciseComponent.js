import React from 'react'
import Scrollbars from 'react-custom-scrollbars';

function contains(list, object) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === object) {
            return true;
        }
        return false;
    }
}

export default class ExerciseComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            workoutList: ["ex1", "ex2"]
        }
    }


    render() {
        return(
            <div className={"ex_comp"} id={`${this.props.exercise.title}`}>
            <table style={{width:"100%", height:"100%"}}>
                <tr>
                    <td style={{width:"15%", padding:"1%"}}>  Image will eventually go here </td>
                    <td style={{width:"60%", padding:"1%", alignContent:"center"}}>
                        <div style={{height:"20%", textAlign:"center"}}>
                            <b>{this.props.exercise.title}</b>
                        </div>
                        <div style={{height:"80%"}}>
                            <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                                {this.props.exercise.description} 
                            </CustomScrollbars>
                        </div>
                    </td>
                    <td style={{width:"15%", padding:"1%", textAlign:"center"}}>  {this.props.exercise.type}</td>
                    <td style={{width:"10%", padding:"1%", alignContent:"center"}}>
                          <button> Add </button>
                    </td>
                </tr>
            </table>
        </div>
        )
    }
}

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  
  const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );