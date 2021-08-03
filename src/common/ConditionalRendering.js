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
            </div>

        )
    }
}

export default ConditionalRendering;