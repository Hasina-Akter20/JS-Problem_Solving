var phones=[
    {Brand:'Xaomi 5+', Price:18000, Camera: 10, Storage:'16GB' },
    {Brand:'Samsang m3', Price:12000, Camera: 10, Storage:'16GB' },
    {Brand:'Walton m32', Price:15000, Camera: 10, Storage:'16GB' },
    {Brand:'Oppo a2', Price:8000, Camera: 10, Storage:'16GB' }
    
]
var cheapest=phones[0];
for (phone of phones){
    if(phone.Price<cheapest.Price){
        cheapest=phone;
    }
}
console.log(cheapest);