let num=prompt("Eded daxil edin")
let sum=0
for(let x=2;x<num.length;x++){
    sum=Math.floor(num/10**(num.length-1))
    sum=sum+Math.floor((num/10))%10
    sum=sum+num%10
}
alert(sum)