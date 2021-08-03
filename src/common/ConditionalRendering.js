import React from "react";


class ConditionalRendering extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        }
    }

    render() {
        let wordDisplay;
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div className="card">
                <div className="card-body">
                    <p style={{color: "#000000", fontSize: "20px"}}>Now you are Logged {wordDisplay}</p>
                </div>
            </div>

        )
    }
}

export default ConditionalRendering;