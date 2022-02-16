function productCount(product,value,incresing){
    const countNumber=document.getElementById(product+'-count');
    let countNumberText=countNumber.innerText;
    if(incresing==true){
        countNumberText=parseInt(countNumberText)+1
    }
    else if(countNumberText>0){
        countNumberText=parseInt(countNumberText)-1
    }
countNumber.innerText=countNumberText
    const price=document.getElementById(product+'-price');
    price.innerText=countNumberText*value
    allCalculate();
}
function getTotal(product){
    const countNumber=document.getElementById(product+'-count');
    let countNumberText=countNumber.innerText;
    return countNumberText
}
function allCalculate(){
    const oppoPhone=getTotal('oppo')*19000;
    const samsungPhone=getTotal('samsung')*79000;
    const redmiPhone=getTotal('redmi')*22000;
    const watch=getTotal('watch')*4000;
    const tv=getTotal('tv')*32000;
    const laptop=getTotal('laptop')*52000;
    const router=getTotal('router')*2600;
    const subTotal=oppoPhone+samsungPhone+redmiPhone+watch+tv+laptop+router;
    const Tax=subTotal/10;
    const totalAmount=subTotal+Tax;

    document.getElementById('sub-Total').innerText=subTotal;
    document.getElementById('tax').innerText=Tax;
    document.getElementById('total-Amount').innerText=totalAmount
}





document.getElementById('oppo-plus').addEventListener('click',function(){
   productCount('oppo',19000,true )
})
document.getElementById('oppo-minus').addEventListener('click',function(){
   productCount('oppo',19000,false)
  
})
document.getElementById('samsung-plus').addEventListener('click',function(){
   productCount('samsung',79000,true)
})
document.getElementById('samsung-minus').addEventListener('click',function(){
   productCount('samsung',79000,false)
  
})
document.getElementById('redmi-plus').addEventListener('click',function(){
   productCount('redmi',22000,true)
})
document.getElementById('redmi-minus').addEventListener('click',function(){
   productCount('redmi',22000,false)
  
})
document.getElementById('watch-plus').addEventListener('click',function(){
   productCount('watch',4000,true)
})
document.getElementById('watch-minus').addEventListener('click',function(){
   productCount('watch',4000,false)
  
})
document.getElementById('tv-plus').addEventListener('click',function(){
   productCount('tv',32000,true)
})
document.getElementById('tv-minus').addEventListener('click',function(){
   productCount('tv',32000,false)
  
})
document.getElementById('laptop-plus').addEventListener('click',function(){
   productCount('laptop',52000,true)
})
document.getElementById('laptop-minus').addEventListener('click',function(){
   productCount('laptop',52000,false)
  
})
document.getElementById('router-plus').addEventListener('click',function(){
   productCount('router',2600,true)
})
document.getElementById('router-minus').addEventListener('click',function(){
   productCount('router',2600,false)
  
})