import React from "react"

export default class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            quote: []
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
                    <span>
                       - <b>{this.state.quote.author}</b>
                       </span>
                    </tr>
                </table>
            </div>

        )
    }
}