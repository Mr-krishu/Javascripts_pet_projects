let count=0;
document.getElementById("plus").addEventListener('click',function(){
    count++;
    document.getElementById("count").innerHTML=count;
    
});
document.getElementById("minus").addEventListener('click',function(){
    if(count>0){count--;}
     document.getElementById("count").innerHTML=count;
    
});