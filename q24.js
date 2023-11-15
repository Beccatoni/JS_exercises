// Write a function that returns the maximum of two numbers.
function maxNum(num1, num2){
    if (num1 > num2){
        console.log(num1, " is greater than ", num2);
    }
    else if (num2 > num1){
        console.log(num2, " is greater than ", num1)
    }
    else{
        console.log(num1, " is equal to ",num2)
    }
}

maxNum(5,5);