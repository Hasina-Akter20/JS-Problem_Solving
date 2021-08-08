// var array=[0,1]
// for(var i=2;i<10;i++){
//     // nth=(n-1)th + (n-2)th 
//     array[i]=array[i-1]+ array[i-2];
// }

// console.log(array);

// function fibo(number){
//     if(typeof number !='number'){
//         return "please enter a number";
//     }
//     if(number<2){
//          return "Please enter a positive number greater then one";
//     }
//     else{
//         var array=[0,1]
//         for(var i=2;i<number;i++){
//             // nth=(n-1)th + (n-2)th 
//             array[i]=array[i-1]+ array[i-2];
            
//         }
//         return array;
//         }
// }

// var fibo_number=fibo("hey");
// console.log(fibo_number);


// usring recursive funstion 

function fibu(number){
    // var array=[0,1]
    //     for(var i=2;i<number;i++){
    //         // nth=(n-1)th + (n-2)th 
    //         array[i]=array[i-1]+ array[i-2];
            
    //     }
    //     return array;
    if(number==0){
        return 0;
    }  
    return fibu(number-1)+fibu(number-2);


}

console.log(fibu(3));