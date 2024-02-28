let num=prompt("Eded daxil edin")
let sum=0
if(num.length==3){
    sum=Math.floor(num/10**2)
    sum=sum+Math.floor((num/10))%10
    sum=sum+num%10
}
else{
    sum=Math.floor(num/10**(num.length-1))
    sum=sum+num%10
    for(let x=3;num.length>x;x++){
        sum=sum+Math.floor((num%10**(num.length-1))/10**(num.length-2))
        sum=sum+Math.floor((num/10))%10
    }   
    
}
alert(sum)