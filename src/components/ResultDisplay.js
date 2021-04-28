import React from "react"

function ResultDisplay(props)
{
    const div_style = {
        width: "100%",
        height: "35%",

        order: "0",

        borderTopRightRadius: "15px", 
        borderTopLeftRadius: "15px", 
        border: "3px solid #1976D2", 
        borderBottom: "0px", 

        backgroundColor: "#1E88E5", 

        textAlign: "bottom",
        fontSize: "2em",

        paddingRight: "0px", 

        position: "relative", 
    }

    const h2_style = {
        margin: "0px", 
        position: "absolute",
        bottom: "10px", 
        right: "15px", 
    }

    return (
        <div style = {div_style}>
            <h2 style = {h2_style}>0.00</h2>
        </div>
    )
}

export default ResultDisplay

