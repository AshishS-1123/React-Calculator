function handleEvent(e, state)
{
    const target = e.target.id

    let new_value = ""

    // if '=' is pressed
    if(target === "equals")
    {
        const computed_value = evaluate_result(state.result)
        state = {...state, result: computed_value}
    }
    // if 'C' is pressed
    else if(target === "clear")
    {
        state = {...state, result: ""}
    }
    // if 'DEL' is pressed
    else if(target === "DEL")
    {
        state = {...state, result: state.result.slice(0, -1)}
    }

    // all remaining are numbers, operators and decimal point

    // get what the user pressed
    const input_value = parse_input(target)
    // add it to the state
    state = {...state, result: state.result + input_value}
    
    return state
}

function parse_input(target)
{
    switch(target)
    {
        case "one": return "1";
        case "two": return "2";
        case "three": return "3";
        case "four": return "4";
        case "five": return "5";
        case "six": return "6";
        case "seven": return "7";
        case "eight": return "8";
        case "nine": return "9";
        case "zero": return "0";
        case "add": return "+";
        case "subtract": return "-";
        case "multiply": return "*";
        case "divide": return "/";
        case "mod": return "%";
        case "decimal": return ".";
    }
}

function evaluate_result(expression)
{
    
}

export default handleEvent
