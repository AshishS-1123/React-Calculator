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
