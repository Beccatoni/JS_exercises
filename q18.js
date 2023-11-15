/* Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
    How to calculate Body Mass Index:
    BMI = weight(kg) / (height(m) x height(m))
 */
function bmiCalculator(w,h){
    let heightinMeters = h/100;
    let BMI = w/ (heightinMeters*heightinMeters);
    if (BMI < 17){
        console.log("Here is your BMI: ", BMI)
        return "UNDERWEIGHT"
    }
    else if( BMI >=17.5 && BMI<=25){
        console.log("Here is your BMI: ", BMI)
        return "You are healthy";
    }
    else {
        console.log("Here is your BMI: ", BMI)
        return "You are overweight";
    }
    return BMI; 
}
console.log(bmiCalculator(90,167));