var ran=[]

for(var i=0; i<10; i++){
    var number=Math.round(Math.random()*100); 
    if(ran.indexOf(number)==-1){
        ran.push(number);
        
    }   
    else{
        console.log(ran, number);
    }
}
console.log(ran);