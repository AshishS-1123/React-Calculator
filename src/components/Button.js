import React from "react"

function Button(props)
{

    return (
		<button onClick={(e) => props.eventHandler(e)}
				style = {(props.attributes.type === "special") ? special_style:simple_style} 
				id={`btn-${props.attributes.value}`}
		> 
			{props.attributes.value} 
		</button>
    )
}

export default Button;
