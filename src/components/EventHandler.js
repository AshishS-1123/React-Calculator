/*
state = operator
		operand_1
		operand_2
		answer
*/
function process_number(num, state)
{
	let final_operand = 0;

	// if there is no operator
	if( state.operator === "" )
	{
		final_operand = state.operand_1.value * 10 + num
		state = {...state, operand_1: {...state.operand_1, value: final_operand} }
	}

	// if operator is present
	else
	{
		final_operand = state.operand_2.value * 10 + num
		state = {...state, operand_2: {...state.operand_2, value: final_operand} }
	}
	
    let ans = String(state.operand_1.value) + 
                String(state.operator);

    if(state.operand_2.value !== 0)
        ans += String(state.operand_2.value)
    state = {...state, answer: ans}

	return state
}

function process_operator(opr, state)
{
    // if there is no operand 1
    if(state.operand_1.value === 0)
        state = {...state, operand_1: {...state.operand_1, value: state.answer}}
    const ans = state.answer + String(opr)
    console.log(ans)
    console.log(state)

	state = {...state, operator: opr, answer: ans}

	return state
}

function process_functional(functional, state)
{
	// if '=' is pressed, then compute result and change in state
	if(functional === "=")
	{
		let ans = parseInt(state.operand_1.value)
		
		if(state.operator === "+")
		{
			ans += parseInt(state.operand_2.value)
			console.log("in plus")
		}
		else if(state.operator === "-")
			ans -= parseInt(state.operand_2.value)
		else if(state.operator === "x")
			ans *= parseInt(state.operand_2.value)
		else if(state.operator === "/")
		{
			if(state.operand_2.value === 0)
				ans = "undefined"
			else
				ans /= parseInt(state.operand_2.value)
		}
		else if(state.operator === "%")
			ans %= parseInt(state.operand_2.value)
        // invalid input corner case
        else
            ans = "0"
        
        const empty_operand = {value: 0, is_decimal: false}
		state = {...state, answer: ans, operator: "", 
                    operand_1:{...state.operand_1, ...empty_operand}, 
                    operand_2: {...state.operand_2, ...empty_operand}}
        
		return state
	}
	else if(functional === "DEL")
	{
		// if no operator
		if(state.operator === "")
		{
			const new_operand = (state.operand_1.value - state.operand_1.value % 10) / 10
            const ans = String(new_operand) 

			// delete from first operand
			state = {...state, operand_1: {...state.operand_1, value: new_operand}, answer: ans}

			return state
		}
        // if operator present
		else
		{
            // if not operand_2
            if(state.operand_2.value === 0)
            {
                const ans = state.operand_1.value
                state = {...state, operator: "", answer: ans}

                return state
            }

			const new_operand = (state.operand_2.value - state.operand_2.value % 10) / 10

            let ans = String(state.operand_1.value) + String(state.operator);
            if(new_operand !== 0) 
                ans += String(new_operand);

			state = {...state, operand_2: {...state.operand_2, value: new_operand}, answer: ans}

			return state
		}
	}
	else if(functional === "C")
	{
		state = {...state, 
				 answer: "0",
				 operand_1: {...state.operand_1, value: 0, is_decimal: false},
				 operand_2: {...state.operand_2, value: 0, is_decimal: false},
				 operator: ""
		}

		return state
	}
}

function process_decimal(state)
{
	// if decimal is given
}

function handleEvent(key_event, state)
{
	const key_pressed = key_event.target.id
	console.log("press", key_pressed)

	//process_number(parseInt(key_pressed), state)
		
	switch( key_pressed )
	{
		case "one": state = {...state, ...process_number(1, state)}
                    break
		case "two": state = {...state, ...process_number(2, state)}
                    break
		case "three": state = {...state, ...process_number(3, state)}
                    break
		case "four": state = {...state, ...process_number(4, state)}
                    break
		case "five": state = {...state, ...process_number(5, state)}
                    break
		case "six": state = {...state, ...process_number(6, state)}
                    break
		case "seven": state = {...state, ...process_number(7, state)}
                    break
		case "eight": state = {...state, ...process_number(8, state)}
                    break
		case "nine": state = {...state, ...process_number(9, state)}
                    break
		case "zero": state = {...state, ...process_number(0, state)}
				  break
		case "add": state = {...state, ...process_operator("+", state) }
				  break
		case "subtract": state = {...state, ...process_operator("-", state) }
				  break
		case "multiply": state = {...state, ...process_operator("*", state) }
				  break
		case "divide": state = {...state, ...process_operator("/", state) }
				  break
		case "mod": state = {...state, ...process_operator("%", state) }
				  break
		case "decimal": process_decimal(state)
				   break
		case "clear": state = {...state, ...process_functional("C", state) }
				  break
		case "DEL": state = {...state, ...process_functional("DEL", state) }
				  break
		case "equals": state = {...state, ...process_functional("=", state) }
				  break
		default: break
	}

	return state
	
}

export default handleEvent
