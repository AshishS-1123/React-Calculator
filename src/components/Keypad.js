import React from "react";

import Button from "./Button";
import { btn_props } from "./button_props";

function Keypad(props)
{
    

	const button_array = btn_props.map( function(property){
		return <Button key={property.id}
					   attributes={property} 
					   eventHandler={props.call}
				/>;
	})

    return (
        <div className= {"keypad_container"} style = {style}>
			{button_array}
        </div>
    )
}

export default Keypad
