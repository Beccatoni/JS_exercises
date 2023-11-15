/* Create a function that determines the age classification of people:
    Bellow are classifications according to specific conditions:
    
    MIMICRY: 			0 - 12
    SELF-DISCOVERY: 	13 - 19
    COMMITMENT: 		20 - 45
    LEGACY:			46 - Above */

function ageClassification(age){
    if (age>=0 && age<= 12){
        return "MIMICRY";
    }
    else if(age>=13 && age<=19){
        return "SELF-DISCOVERY";
    }
    else if (age>=20 && age<= 45){
        return "COMMITMENT";
    }
    else{
        return "LEGACY";
    }
}

const personAge = 24;
const classification = ageClassification(personAge);
console.log("The age classification is: ", classification);