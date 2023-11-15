// Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1
function onesZeros(){
       const rows = 5;
       const columns = 5;

       for (let i = 0; i< rows; i++){
        let row = "";
        for(let j = 0; j<columns; j++){
            if (i===0 || i===rows-1 || j===0|| j===columns-1){
                row += "1 ";
            }
            else{
                row += "0 ";
            }
        }
        // return row;
        console.log(row);

        }
       }
console.log(onesZeros());
