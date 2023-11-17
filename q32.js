// 32.	Create a function that receives two numbers and returns the bigger number.
function biggerNum(num1, num2){
    if (num1 > num2){
        console.log(num1, " is bigger than ", num2);
    }
    else if (num2 > num1){
        console.log(num2, " is bigger than ", num1)
    }
    else{
        console.log(num1, " is equal to ",num2)
    }
}

biggerNum(5,5);