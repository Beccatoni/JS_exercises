function average(arr){
    let sum = 0;
    for (let a=0; a<arr.length; a++){
        sum = sum + arr[a];
    }
    let avg = sum / arr.length;

    return avg;
}

console.log("The average of the given array is: ",average([1,4,3,6,2]));