function ones(height){
  for (let h = 0; h < height; h++){
    let row = "";
    for (let j= 0; j<height; j++){
        if (j===height - h - 1){
            row += '1 ';
        }
        else{
            row += "  ";
        }
    }
    console.log(row);
  }
}

ones(4);