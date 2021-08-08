var array=[452,353,366,222,77,224]
largest_number=array[0];

for(var i=1;i<=5;i++){
    var element=array[i];

    if (element<largest_number){
        largest_number=element;
    }
}

console.log(largest_number);