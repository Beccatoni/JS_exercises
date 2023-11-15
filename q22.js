// Write a function that checks if a number is even.
function evenCheck(n){
    if (n%2===0){
        return "The number is even";
    }
    else{
        return "The provided number is not even"
    }
}
console.log(evenCheck(7));