// Given an array like this:
//     var array = [1,3,4,3,7,8,0,12,19];
    
    // Create a function to reverse the order of the elements inside the given array.
function reverseArray(arr){
    let start= 0;
    let end = arr.length-1;

    while (start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    console.log(arr);
}

reverseArray([1,2,3,4,5]);
