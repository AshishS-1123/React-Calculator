import React from "react"

import ResultDisplay from "./ResultDisplay"
import Keypad from "./Keypad"
import handleEvent from "./EventHandler"

function Calculator() {
	const [state, setState] = React.useState( {
		answer: "0",
		operand_1: {value: 0, is_decimal: false}, 
		operand_2: {value: 0, is_decimal: false}, 
		operator: "" 
	} );


	const onClickCall = (e) => {
	    const new_state = handleEvent(e, state)	
		setState(new_state)
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
			<ResultDisplay result = {state.answer}/>
			<Keypad call={onClickCall} />
        </div>
    );
}

export default Calculator
