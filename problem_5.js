function calculateWatchTime (times){
    for (let time of times){
        if (typeof time != 'number'){
            return 'invalid'
        }
    }
    let totalSeconds = 0 ;
    for (let time of times){
        totalSeconds += time ;
    }
    let hours = Math.floor (totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds   = totalSeconds %  60;

 return {hour: hours, minute: minutes, second: seconds} ;

}

console.log (calculateWatchTime([100, 3800, "90"   ]))
// shohan 