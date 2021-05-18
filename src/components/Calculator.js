import React from "react"

import ResultDisplay from "./ResultDisplay"
import Keypad from "./Keypad"
import handleEvent from "./EventHandler"

class Calculator extends React.Component {


    render()
    {
        
        return (
            <div style = {style}>
				<ResultDisplay />
				<Keypad call={onClickCall} />
            </div>
        )
    }
}

export default Calculator
