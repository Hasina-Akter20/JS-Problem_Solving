// var a=233, b=132, c=43;

// if(a>b && a>c){
//     console.log(a);
// else if(b>c){
// }
//     console.log(b);
// }
// else{
//     console.log(c);
// }

//using fuction

function largest_number(first_number,second_number, third_number){
 if(first_number>second_number && first_number>third_number){
    return first_number;
 }
 else if(second_number>third_number){
    return second_number;
 }
 else{
     return third_number;
 }
}


console.log(largest_number(340,45,2563));
