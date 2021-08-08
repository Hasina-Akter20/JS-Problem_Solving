//3rd problem
function deliveryCost(quantity){
    const deliveryCostFor_first100=100;
    const deliveryCostFor_second100=80;
    const deliveryCostFor_rest=50;
    
    if(quantity<=100){
        return quantity*deliveryCostFor_first100;
    }
    else if(quantity<=200){
        var First_cost=100*deliveryCostFor_first100;
        var rest=quantity-100;
        return First_cost+ rest*deliveryCostFor_second100;
    }
    else{
        var First_cost=100*deliveryCostFor_first100;
        var second_cost=100*deliveryCostFor_second100;
        var rest=quantity-200;
        return First_cost+second_cost+rest*deliveryCostFor_rest

    }
}

console.log(deliveryCost(201));