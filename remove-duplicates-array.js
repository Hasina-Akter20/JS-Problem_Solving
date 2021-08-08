var  array=[12,23,56,45,21,12];
var elements=[];

for(var element of array){
    if(elements.indexOf(element)==-1){
        elements.push(element);
    }
}

console.log(elements);