
function handleEvent(key_event, state)
{
	const key_pressed = key_event.target.id.slice(4,7)
	console.log("press", key_pressed)

	//process_number(parseInt(key_pressed), state)
		
	switch( key_pressed )
	{
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0": state = {...state, ...process_number(parseInt(key_pressed), state)}
				  console.log(state)
				  break
		case "+":
		case "-":
		case "x":
		case "/":
		case "%": state = {...state, ...process_operator(key_pressed, state) }
				  console.log(state)
				  break
		case ".0": process_decimal(state)
				   break
		case "C":
		case "DEL":
		case "=": state = {...state, ...process_functional(key_pressed, state) }
				  console.log(state)
				  break
		default: break
	}

	return state
	
}

export default handleEvent