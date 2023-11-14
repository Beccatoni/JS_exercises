/*  Create a function that displays a pattern like this:
1 1 1 1 1
1 1 1
1 1 
1 */ 

function displayPattern(){
    for (let i= 5; i>=1; i--){
        let rows = "";
        for (let j = 1; j<= i; j++){
            rows += '1 ';
        }
        console.log(rows);
    }
}
displayPattern();