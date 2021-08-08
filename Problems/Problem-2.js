//second problem

function totalSales(shirt,pant,shoes){
    if(shirt<0 || pant<0 || shoes<0){
        return "Please enter a valid quantity!"
    }
    shirt_price=100;
    pant_price=200;
    shoes_price=500;
    total_seles=shirt*shirt_price + pant*pant_price + shoes*shoes_price;
    return total_seles;
}


console.log(totalSales(2,1,-1));