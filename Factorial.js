//// using for loop /
// var number=10;
// var factorial=1;
// for(var i=1; i<=number; i++ ){
//     factorial*=i;
// }
// console.log("Factorial is = "+factorial);


////using  function 
// function factorials(number){
//     factorial=1;
//     for(var i=1; i<=number; i++ ){
//             factorial*=i;
//         }
//     return factorial;
// }

// console.log(factorials(10));


////decriment 
// function factorials(number){
//     factorial=1;
//     var i=number;
//     while(i>=1){
//         factorial*=i
//         i--
//     }
//     return factorial;
// }
// console.log(factorials(3));


//// using recursive funcyion

function recu(number){ 
    if(number==0){
        return 1;
    }
    return number*recu(number-1);
}

console.log(recu(4));