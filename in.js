const f = (n)=>{
    if(n===0) return 0
    if(n>0 && n%3===2) return f(n-1)+1
    if(n>0 && n%3<2) return f((n-n%3)/3)

}

for(let i=0; i<100000; i++){
    if(f(i)==5) console.log(i);
}