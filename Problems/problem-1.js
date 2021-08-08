// first problem
function seerToMon(seer){
    //20 seer = 1 mon
    if(seer<0){
        return "Please enter an exact amount!"
    }
    return seer/20;
}


console.log(seerToMon(-85));