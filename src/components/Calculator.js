import React from "react"

import ResultDisplay from "./ResultDisplay"
import Keypad from "./Keypad"
import handleEvent from "./EventHandler"

function Calculator() {
    const [result, setResult] = React.useState("0");

	const onClickCall = (e) => {
	    const new_result = handleEvent(e, result)	
		setResult(new_result)
	}

    const style = {
        height: "80vh", 
        width: "50%",
        minWidth: "400px",
		maxWidth: "500px", 

        margin: "0 auto",
        marginTop: "10vh", 
            
        display: "flex",
        flexDirection: "column",
        position: "relative", 

        borderRadius: "15px", 
		zIndex: "0", 
    }
        
    return (
        <div style = {style}>
			<ResultDisplay result = {result}/>
			<Keypad call={onClickCall} />
        </div>
    );
}

export default Calculator
