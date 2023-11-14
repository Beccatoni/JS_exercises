/*Create a function that recieves an array and returns
 the greates value inside that array*/
 function greatest(arr){
    // if the arr is empty orcontains 1 element
    if (arr.length === 0 && arr.length === 1){
        console.log("Your array is empty or has 1 element")
    }
    let great = arr[0];
    for (let i=1; i< arr.length; i++){
        if (arr[i]> great){
             great = arr[i]
        }
        
    }
    return great;
}

 let array = [1,2,3,4,7];
 console.log("The greatest in the array is: ",greatest(array));








//  class
// function greatestVal(arr){
//     // var sortedArray = arr.split("");
//     // return sortedArray.sort();
//     // sort from the biggest to the smallest 
//     // var sortedelement = arr.sort((a,b) => b-a);
//     // return sortedelement[0]

// }
// console.log(greatestVal([32,4,5,3,2,5,6]));

