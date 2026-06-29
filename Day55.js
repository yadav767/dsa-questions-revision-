let s = '{[()]}';


function isValidString(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char)
        } else {
            if (stack.length == 0) return false
            let topOfStack = stack[stack.length - 1]
            if (topOfStack == '[' && char==']' ||
                topOfStack == '{' && char=='}' ||
                topOfStack == '(' && char==')' 
            ){
                stack.pop()
            }else {
                return false 
            }
        }
    }

    return stack.length == 0
}

console.log(isValidString(s));