import React from "react";


class ConditionalRendering extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 2
            }

        })
    }

    render() {
        let wordDisplay;
        if (this.state.isLoggedIn) {
            wordDisplay = "In"
        } else {
            wordDisplay = "Out"
        }

        return (
            <div className="card mb-5">
                <div className="card-body">
                    <p style={{color: "#000000", fontSize: "20px", margin: 0}}>Now you are <em>Logged</em> {wordDisplay}
                    </p>
                </div>

                <div className="card-footer text-center">
                    <h1 style={{color: "coral"}}>{this.state.count}</h1>
                    <button className="btn btn-lg btn-outline-danger" onClick={this.handleClick}>Update!</button>
                </div>
            </div>

        )
    }
}

export default ConditionalRendering;