import React from "react";
import {BsFillCircleFill} from "react-icons/bs";
import {BsFillCaretRightFill} from "react-icons/bs";

function InterviewCard(props) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 style={{color: props.question ? "#8c8c8c" : "initial"}}>
                    <BsFillCircleFill style={{color: "red"}}/>
                    { props.question}
                </h4>
                <p style={{color: "#4c4c4c"}}>
                    <BsFillCaretRightFill style={{color: "red", fontSize: "30px"}}/>
                    { props.answer}
                </p>
            </div>


        </div>

    )
}

export default InterviewCard;