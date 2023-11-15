// Write a function that returns the minimum of two numbers.
function minNum(num1, num2){
    if (num1 < num2){
        console.log(num1, " is smaller than ", num2);
    }
    else if (num2 < num1){
        console.log(num2, " is smaller than ", num1)
    }
    else{
        console.log(num1, " is equal to ",num2)
    }
}

minNum(5,4);