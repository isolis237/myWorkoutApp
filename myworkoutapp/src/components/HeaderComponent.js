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
                        <td>
                            {"Welcome, " + this.props.user}
                        </td>
                        <td style={{align:"right"}}>
                            {this.state.date.toLocaleTimeString()}
                        </td>
                    </tr>
                    <tr>
                        <i>{this.state.quote.text}</i>
                    </tr>
                    <tr>
                       - <b>{this.state.quote.author}</b>
                    </tr>
                </table>
            </div>

        )
    }
}