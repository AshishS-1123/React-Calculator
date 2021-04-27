import React from "react"

import ResultDisplay from "./ResultDisplay"
import Keypad from "./Keypad"
import handleEvent from "./EventHandler"

class Calculator extends React.Component {

	constructor(){
		super()

		
	}

    render()
    {

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
				<ResultDisplay />
				<Keypad call={onClickCall} />
            </div>
        )
    }
}

export default Calculator
