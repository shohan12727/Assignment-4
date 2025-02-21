function validEmail (email){
    if (typeof email != 'string'){
        return 'invalid';
    }
    else if (email.includes(' ')){
        return false;
    }
    // baki_gula_parlam_na 
    else {
        return true;
    }
}
console.log(validEmail (22))