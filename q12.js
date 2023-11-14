/* Create a function that displays a pattern like this:
1 1 1 1 1
1 1 1 0 0 
1 1 0 0 0 
1 0 0 0 0  */
function patternr() {
    const rows = 4;
    const columns = 5;

    for (let w = 0; w < rows; w++) {
        let row = "";
        for (let x = 0; x < columns; x++) {
            if (x < rows - w) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}

patternr();
