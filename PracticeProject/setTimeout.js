let a = 19;
let b = 20;
setTimeout(()=> {
     b= 1;
},1000);
console.warn(a+b);
setTimeout(()=> {    
    console.warn(a+b);
},1000);