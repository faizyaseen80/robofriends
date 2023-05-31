import React from "react";
import '../container/App.css'

const Scroll = (props) => {
    return (
        <div className="scroll" style={{overflow: 'scroll', border: "5px solid black", height: "572px"}}>
            { props.children }
        </div>
    )
}

export default Scroll;