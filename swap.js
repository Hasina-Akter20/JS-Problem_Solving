var first_number=4;
var second_number=3;
// console.log(first_number, second_number);
//first approach
// var temp=first_number;
// first_number=second_number;
// second_number=temp;
// console.log(first_number, second_number);

//destructuring
[first_number,second_number]=[second_number,first_number];
console.log(first_number, second_number);

