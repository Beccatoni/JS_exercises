// Write a function that reverses a string.
// function stringReverser(string){
//     return string.split('').reverse().join('');
// }

// console.log(stringReverser("Mutoni"));

// way two
function reversesString(str){
    let reversed = "";
    for (let i = str.length-1; i >=0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reversesString("Mutoni"));