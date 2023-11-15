/* Given an array like this: 
 var some numbers = [3,4,8,2,1,2,2,6,3,4];
 a. Create a function to sort and arrange these elements of the array in ascending order. 
 b. Modify the first array to make sure that it will also display the 
    last 3 numbers and the first 3 numbers in front of the sorted array
 c. From the same sorted array, also display the first 3 numbers.*/
function modifyAndDisplay(arr){
    console.log("Original array: ", arr);
    const sortedArray = arr.slice().sort((a, b) => a-b);
    console.log("Sorted array: ", sortedArray);

    const modifiedArray = arr.slice(0,3).concat(sortedArray, arr.slice(-3));
    console.log("Modified array: ", modifiedArray);

    const firstThreeFromSorted = sortedArray.slice(0,3);
    console.log("First three numbers from sorted array: ", firstThreeFromSorted)
}
modifyAndDisplay([54,2,3,7,6,75]);