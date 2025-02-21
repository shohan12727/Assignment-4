function isBestFriend (f1,f2){
    if (typeof f1 != 'object' && typeof f2 != 'bigint'){
        return 'invalid';
    }
    else if (f1.bestFriend === f2.roll && f2.bestFriend ){
        return 'they are best friend';
    }
    else {
        return 'they are not best friend'
    }
}

console.log ();