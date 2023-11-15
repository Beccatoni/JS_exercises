/* Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
    How to calculate Body Mass Index:
    BMI = weight(kg) / (height(m) x height(m))
 */
function bmiCalculator(w,h){
    let heightinMeters = h/100;
    let BMI = w/ (heightinMeters*heightinMeters);
    return BMI; 
}
console.log(bmiCalculator(50,167));