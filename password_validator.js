function passwordValidator(password){
    // length Give The Password Full Length Number .
    // let length = password.length;

    // Reasons Container
    let reasons = [];


    // Space Checker 
    let hasSpace = password.includes(" ");

    let has8PlusLetter = false;
    let hasNumber = false;
    let hasUpperCase = false;

    for(let i = 0; i < password.length; i++){

        // letter Give The letter 
        let letter = password[i];

        // This Line Check Password Length 8= or less?
        if(i >= 7){ // This number start with 0 to 7 = 8
            has8PlusLetter = true;
        }

        // This Line Check Password Have Number or Not?
        if(letter >= "0" && letter <= "9"){
            hasNumber = true;
        }

        // This Line Check Password Have Uppercase or Not?
        if(letter >= "A" && letter <= "Z"){
            hasUpperCase = true;
        }
    }

    // If have space, this reason will be push.
    if(hasSpace === true){ // True === True: true
        reasons.push("Please remove space!")
    }

    // If have less than 8 charecter, this reason will be push.
    if(has8PlusLetter === false){ // False === False: true
        reasons.push("Must need at least 8 charecter!")
    }

    // If don't have a number, this reason will be push.
    if(hasNumber === false){ // False === False: true;
        reasons.push("Must be need number!")
    }

    // If don't have Uppercase, this reason will be push.
    if(hasUpperCase === false){
        reasons.push("Must be need uppercase!")
    }


    // IsValid Check the length of the Reasons, jodi reason e kisu thake taile to false diyei dibe, r jodi kisu na thake taile true.
    let isValid;
    if(reasons.length === 0){
        isValid = true;
    } else{
        isValid = false;
    }


    return{
        valid: isValid, // Valid give the True or False value.
        reason: reasons // Reasons give the Reason why the isvalid give false answer.
    };

    // console.log("Pass Length is 8 Plus:", has8PlusLetter,":", "Have Number:", hasNumber, ":", "Pass have upperCase:", hasUpperCase, ":","Have Space", hasSpace);
}

const userPass = "helloWorld1"
const output = passwordValidator(userPass);
console.log(output);