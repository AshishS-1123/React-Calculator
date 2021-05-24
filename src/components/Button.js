import React from "react"

function Button(props)
{
    const simple_style = {
        width: "25%",
        height: "20%",

        margin: "0px", 

		zIndex: -10, 

        textAlign: "center", 
		fontSize: "1.5em", 

		flexBasis: "25%", 
		order: props.attributes.id, 

    }

	const special_style = {...simple_style, 
	}

    return (
		<button onClick={(e) => props.eventHandler(e)}
				style = {(props.attributes.type === "special") ? special_style:simple_style} 
				id={props.attributes.string}
		> 
			{props.attributes.value} 
		</button>
    )
}

export default Button;
