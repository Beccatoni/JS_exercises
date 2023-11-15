// Write a function that calculates the factorial of a number.
function factorialOfNumber(h){
    let factorial = 1;
    if (h < 0 || h === 0){
        return "There is no factorial of a negative number or zero";
    }
    else if (h === 1){
        return 1;
    }
    else {
        for (i = 1; i <= h; i++){
            factorial *= i; 
        }
        return factorial;
    }
}
console.log(factorialOfNumber(4));