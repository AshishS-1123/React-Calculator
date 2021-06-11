function handleEvent(e, result)
{
    const target = e.target.id

    // if '=' is pressed
    if(target === "equals")
    {
        result = evaluate_result(result)
    }
    // if 'C' is pressed
    else if(target === "clear")
    {
        result = "0"
    }
    // if 'DEL' is pressed
    else if(target === "DEL")
    {
        result = result.slice(0, -1)
    }
    // if "." point
    else if(target === "decimal")
    {
        let valid = true

        for(let i = result.length-1; i !== -1; --i)
        {
            if(is_operator(result[i]))
                break
            if(result[i] === ".")
            {
                valid = false
                break
            }
        }

        if(valid === true)
            result += "."

    }
    // all remaining are numbers, operators and
    else 
    {
        // get what the user pressed
        const input_value = parse_input(target)
        if(is_operator(input_value))
        {
            if(is_operator(result[result.length-1]))
            {
                if(input_value !== "-")
                {
                    let i = result.length-1
                    while(i !== -1 && is_operator(result[i]))
                        --i
                    i+= 1
                        
                    result = result.slice(0, i)
                }
            }
        }
        if(result === "0")
        {
            if(input_value !== "0")
                result = input_value;
            return result;
        }

        // add it to the state
        result += input_value
    }

    return result
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
        default: return "";
    }
}

function evaluate_result(infix)
{
    let expression = [];
    let curr = "";

    for(let i = 0; i < infix.length; ++i)
    {
        if(i === 0 && infix[i] === "-")
        {
            curr = "-"
            ++i;
        }

        while(!is_operator(infix[i]))
        {
            curr += infix[i]
            ++i;

            if(i >= infix.length)
                break;
        }
        
        expression.push(curr);
    
        if(i < infix.length)
            expression.push(infix[i]);
        
        curr = "";

        if(i < infix.length)
        {
            if(is_operator(infix[i]) && infix[i+1] === "-")
            {
                curr = "-"
                ++i
            }
        }
    }

    let postfix = [];
    let stack = [];

    for(let i = 0; i < expression.length; ++i)
    {
        if(!is_operator(expression[i]))
        {
            postfix.push(expression[i]);
        }
        else
        {
            while(stack.length !== 0 && operator_precedence(expression[i]) <= operator_precedence(stack[stack.length-1]))
            {
                postfix.push(stack.pop());
            }

            stack.push(expression[i]);
        }
    }

    while(stack.length !== 0)
        postfix.push(stack.pop());

    for(let i = 0; i < postfix.length; ++i)
    {
        if(is_operator(postfix[i]))
        {
            let operand_1 = parseFloat(stack.pop());
            let operand_2 = parseFloat(stack.pop());

            switch(postfix[i])
            {
                case "+": stack.push(operand_2+operand_1);
                        break;
                case "-": stack.push(operand_2-operand_1);
                        break;
                case "*": stack.push(operand_2*operand_1);
                        break;
                case "/": stack.push(operand_2/operand_1);
                        break;
                default: console.log("Some error");
            }
        }
        else
            stack.push(postfix[i]);
    }


    return parseFloat(stack.pop());
}

function is_operator(character)
{
    switch(character)
    {
        case "+":
        case "-":
        case "*":
        case "/": return true;
        default: return false;
    }
}

function operator_precedence(operator)
{
    switch(operator)
    {
        case "+":
        case "-": return 1;
        case "*":
        case "/": return 2;
        default: return -1;
    }
}

export default handleEvent
