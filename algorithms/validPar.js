const isValid = (s) => {
    const stack = []

    for (const char of s){
        //dont use in bc will give index
        //for loop iterates over each character from input
        if (char === "(" || char === "[" || char === "{"){
            stack.push(char)
        }
        //if the character is any of the opening symbols, it gets pushed into the stack 

        else {
            //check for opening brackets after iterating through all the characters
            //if there are still opening brackets, it means there was no corrosponding bracket so it returns false
            //this checks if stack is empty after encountering a closing bracket since it is in else statement that only handles closing brackets 
            if(stack.length === 0){
                return false
            }
            //if stack is not empty, it pops the top element from stack and assigns it to the variable 
            //open would be the variable it popped from stack
            let open = stack.pop()
            console.log(open)
            //then taking the open character it popped, it checks which opening symbol it is and compares it to the closing symbol by using the !
            //if opening is ( and closing is not ) = false
            //It iterates through each symbol in the stack since it is all within a for loop 
            if (open === "(" && char !== ")"){
                return false
            }
            if (open === "[" && char !== "]"){
                return false
            }
            if (open === "{" && char !== "}"){
                return false
            }
            
        }
    }
    //
    //return if nothing is left in stack , meaning all opening and closing brackets were correctly matched 
    return stack.length === 0

};


console.log(isValid("()"))

//using a stack is the optimal solution to solving this problem. without a stack, you would need to explicitly keep track of the order of the parenthesis. 

// knowing the properties of the stack data structure and when/how to apply it saves you a lot of extra work.

// that's why data structures and algorithms questions are asked on technical interviews.
//* Stack would keep track of order without the index 

//with const, you can change the stuff inside the array
// const array is like a house. the people inside a house can change but the house itself stays in the same place
//let array is if the house can be moved physically to another location

/*
input 
true = "()[]{}"
false = "(]"
output is boolean (true or false)
corrosponding open brackets should have respective partner, only string, no spaces

psuedo-code
- 
    - split into an array 
    - iterate through the string 
    - have a collection to store the opening parenthesis in a collection 
    - compare the closing parenthesis with the closing collection 

    OR
    - have a nested loop to check before and after the iteration to compare 

*/


/*

*/