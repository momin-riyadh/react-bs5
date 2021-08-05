import React from "react";


class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            count: 0,
            timeNow: new Date()
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.clock()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    clock() {
        this.setState({
            timeNow: new Date()
        })
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
        if (this.setState.isLoggedIn) {
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

                <div className="card-footer text-center">
                    <h1 style={{color: "#000000"}}>{this.state.timeNow.toLocaleTimeString(this.props.locale)}</h1>
                </div>
            </div>

        )
    }
}

export default ConditionalRendering;