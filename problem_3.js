function electionResult (votes){
    if (!Array.isArray(votes)){
        return 'invalid';
    }
    let countMan = 0;
    let countBana = 0;
    for (let vote of votes){
        if (vote === 'mango') {
            countMan ++ ;
        }
        else if (vote === 'banana'){
            countBana ++ ;
        }
    }
    if (countBana<countMan){
        return 'mango';
    }
    else if (countBana>countMan){
        return 'banana';
    }
    else {
        return 'draw';
    }
}



console.log (electionResult(["mango", "BananA", "na vote", "na vote"]))