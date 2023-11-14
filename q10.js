/*  Create a function that displays a patern like this:
	* * * * *
	* * * * *
	* * * * *
	* * * * *    */

// function displayPattern(rows, columns){
//     for (let i = 0; i<rows; i++){
//         let row = "";
//         for (let j = 0; j<columns; j++){
//             row += "* "; 
//         }
//         console.log(row);
//     }
// }
// displayPattern(4,3);

function pattern(rows, cols){
    for (let w=0; w< rows; w++){
        console.log("* ".repeat(cols));
    }

}
pattern(5,2);

